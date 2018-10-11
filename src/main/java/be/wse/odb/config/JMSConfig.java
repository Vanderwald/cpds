package be.wse.odb.config;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.activemq.jms.pool.PooledConnectionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.jms.support.converter.MessageConverter;
import org.springframework.jms.support.converter.MessageType;

import javax.jms.ConnectionFactory;

@Configuration
@EnableJms
public class JMSConfig {

    @Bean(destroyMethod = "stop")
    public ConnectionFactory jmsConnectionFactory() {
        return createConnectionFactory();
    }

    @Bean
    public DefaultJmsListenerContainerFactory jmsListenerContainerFactory() {
        return createJmsListenerContainerFactory(jmsConnectionFactory());
    }

    @Bean
    public MessageConverter jmsMessageConverter() {
        final MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
        converter.setTargetType(MessageType.TEXT);
        return converter;
    }

    @Bean
    public JmsTemplate jmsTemplate(final MessageConverter jmsMessageConverter) {
        final JmsTemplate jmsTemplate = new JmsTemplate(jmsConnectionFactory());
        jmsTemplate.setPubSubDomain(true);
        jmsTemplate.setSessionTransacted(true);
        jmsTemplate.setMessageConverter(jmsMessageConverter);
        return jmsTemplate;
    }

    private PooledConnectionFactory createConnectionFactory() {
        final PooledConnectionFactory factory = new PooledConnectionFactory();
        factory.setIdleTimeout(0);
        final ActiveMQConnectionFactory activeMQConnectionFactory = new ActiveMQConnectionFactory();
        activeMQConnectionFactory.setBrokerURL("tcp://localhost:61619");
        activeMQConnectionFactory.setUseAsyncSend(true);
        factory.setConnectionFactory(activeMQConnectionFactory);
        return factory;
    }

    private DefaultJmsListenerContainerFactory createJmsListenerContainerFactory(
            final ConnectionFactory connectionFactory) {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setSessionTransacted(true);
        factory.setPubSubDomain(false);
        return factory;
    }

}