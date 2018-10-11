# WSE-ODB Blockchain: Backend (Java Spring)

## Features
* Read the Queue and process it accordingly
    * Creation and updates of "aanvraag"
    * Creation and updates of "erkenning"

# WSE-ODB API References
* [Getting started](#getting-started)
* [API Docs](#api-docs)
    * [Introduction](#1.-introduction)
    * [Aanvraag API](#2.-aanvraag-api)
        * [Get all](#2.1.-get-all)
        * [Get by id](#2.2.-get-by-id)
        * [Get history](#2.3.-get-history-by-id)
    * [Erkenning API](#3.-erkenning-api)
        * [Get all](#3.1.-get-all)
        * [Get by id](#3.2.-get-by-id)
        * [Get history](#2.4.-get-history-by-id)
        
        
## Getting started
Step 1: Forward the ODB queues to a local port with the following commands:

`ssh -L 8163:localhost:8161 username@30.56.92.58`

`ssh -L 61619:localhost:61616 username@30.56.92.58`

Step 2: Download and run docker

https://docs.docker.com/docker-for-mac/install/

Step 3: Start the Hyperledger Blockchain. Enter the root folder and use the following command:

`yarn start`

Step 4: Run the Java application

## Debugging

### Something went wrong while connecting to the queues. 

```
javax.jms.JMSException: Error while attempting to add new Connection to the pool
	at org.apache.activemq.jms.pool.PooledConnectionFactory.createJmsException(PooledConnectionFactory.java:266) ~[activemq-jms-pool-5.15.3.jar:5.15.3]

2018-10-03 13:05:47.889 ERROR 18745 --- [enerContainer-1] o.s.j.l.DefaultMessageListenerContainer  : Could not refresh JMS Connection for destination 'ODB.BLOCKCHAIN' - retrying using FixedBackOff{interval=5000, currentAttempts=8, maxAttempts=unlimited}. Cause: Error while attempting to add new Connection to the pool; nested exception is javax.jms.JMSException: Could not connect to broker URL: tcp://localhost:61619. Reason: java.net.ConnectException: Connection refused (Connection refused)

```

* Make sure the correct port is set in config/JMSConfig.java. If the steps above are followed, the broker url should be `tcp://localhost:61619`

* Make sure your port forwarding is still set. This will sometimes timeout, and cause this error.


### Something went wrong while connecting to the blockchain

```
org.hyperledger.fabric.sdk.exception.EventHubException: io.grpc.StatusRuntimeException: UNAVAILABLE: io exception
	at org.hyperledger.fabric.sdk.EventHub$1.onError(EventHub.java:233) [fabric-sdk-java-1.1.0-alpha.jar:na]

2018-10-03 13:09:39.741 ERROR 18745 --- [ault-executor-1] org.hyperledger.fabric.sdk.EventHub      : EventHub:eventhub01 terminated is false shutdown is false has error UNAVAILABLE: io exception 

```


* Make sure the correct version of Hyperledger has started (1.2)
* Make sure the docker containers are still running


## API DOCS

### 1. Introduction
This is a Spring REST Docs documentation of the WSE-ODB blockchain API.

### 2. Aanvraag API
Collection of CRUD API endpoints used to retrieve "aanvragen" from the hyperledger blockchain

#### 2.1. Get all
Obtains all "aanvragen" from the blockchain.

##### 2.1.1. Sample Request
```
GET /api/aanvraag HTTP/1.1
Host: localhost:8080
```

##### 2.1.2. Sample Response
``` 
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 1994

[{"aanvraagNummer":"33286aa2-e68b-4a6b-99e0-9ff32c823eae","onderneming":{"ondernemingID":48632,"ondernemingsnummer":"0844407071"},"aanvraagType":"OC","paritairComite":null,"naamOpleiding":"Bloemschikken","referentie":"BS001","website":"http://www.blockchain.com","eerstVolgendeDatum":"2018-10-27","doelgroepOpleiding":"Doelgroep testje","urenAfstandonderwijs":"360","urenContactonderwijs":"360","urenWerkplekleren":"","studiepunten":null,"inhoud":"Inhoud testje","metModules":false,"werkplekleren":"NIET","modules":[],"doelgroepcode":"EA","ingediendOp":"2018-10-02T12:48:52.66","documenten":[],"zelfanalyse":[{"code":"BASISVAARDIGHEDEN","deelgebied":[{"code":"GELETTERDHEID","value":false},{"code":"REKENVAARDIGHEID","value":false},{"code":"ICT_BASIS","value":false}],"value":false},{"code":"TAALOPLEIDING","deelgebied":[{"code":"NL","value":false},{"code":"FR","value":false},{"code":"DE","value":false},{"code":"EN","value":false}],"niveau":"Geen","value":false},{"code":"DIPLOMA_SECUNDAIR_BEROEPKWALIFICATIE","beroep":"","kwalificatie":"DIPLOMA_SECUNDAIR_ONDERWIJS","value":false},{"code":"DIPLOMA_HOGER_ONDERWIJS","value":false},{"code":"NEDERLANDS_ANDERSTALIGEN","value":false},{"code":"EXAMENCOMMISSIE_SECUNDAIR","value":false},{"code":"COMMUNICATIE_SAMENWERKING","value":true},{"code":"SOCIAAL_OVERLEG","value":false},{"code":"OMGAAN_INFORMATIE","value":false},{"code":"ONTWIKKELINGSPOTENTIEEL","value":false},{"code":"ONDERNEMERSZIN_ONDERNEMERSCHAP","value":false},{"code":"KNELPUNTBEROEP","knelpuntberoep":"","value":false},{"code":"STEM_OPLEIDING","value":true},{"code":"TOEKOMSTIG_TEKORT","document_uri":[],"value":false,"url":""},{"code":"VERPLICHT_ATTEST","wet":"","attest":"","value":false}],"hashedDocs":[{"details":{"name":"ODB_aanvraag_overzicht.pdf","uri":"EO/33286aa2-e68b-4a6b-99e0-9ff32c823eae/ODB_aanvraag_overzicht.pdf","publiek":true,"privaat":false},"checksum":"f90919930456b367ef80eed1abedede8"}],"timestamp":1538562330,"dateAddedToChainString":"03-10-2018 12:25:30"}]
```

##### 2.1.3. CURL sample
`$ curl 'http://localhost:8080/api/aanvraag' -i -X GET`

#### 2.2. Get by id

#### 
Obtains a specific "aanvraag" from the blockchain by its unique identifier.

##### 2.2.1. Sample Request
```
GET /api/aanvraag/33286aa2-e68b-4a6b-99e0-9ff32c823eae HTTP/1.1
Host: localhost:8080
```

##### 2.2.2. Sample Response
```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 1992

{"aanvraagNummer":"33286aa2-e68b-4a6b-99e0-9ff32c823eae","onderneming":{"ondernemingID":48632,"ondernemingsnummer":"0844407071"},"aanvraagType":"OC","paritairComite":null,"naamOpleiding":"Bloemschikken","referentie":"BS001","website":"http://www.blockchain.com","eerstVolgendeDatum":"2018-10-27","doelgroepOpleiding":"Doelgroep testje","urenAfstandonderwijs":"360","urenContactonderwijs":"360","urenWerkplekleren":"","studiepunten":null,"inhoud":"Inhoud testje","metModules":false,"werkplekleren":"NIET","modules":[],"doelgroepcode":"EA","ingediendOp":"2018-10-02T12:48:52.66","documenten":[],"zelfanalyse":[{"code":"BASISVAARDIGHEDEN","deelgebied":[{"code":"GELETTERDHEID","value":false},{"code":"REKENVAARDIGHEID","value":false},{"code":"ICT_BASIS","value":false}],"value":false},{"code":"TAALOPLEIDING","deelgebied":[{"code":"NL","value":false},{"code":"FR","value":false},{"code":"DE","value":false},{"code":"EN","value":false}],"niveau":"Geen","value":false},{"code":"DIPLOMA_SECUNDAIR_BEROEPKWALIFICATIE","beroep":"","kwalificatie":"DIPLOMA_SECUNDAIR_ONDERWIJS","value":false},{"code":"DIPLOMA_HOGER_ONDERWIJS","value":false},{"code":"NEDERLANDS_ANDERSTALIGEN","value":false},{"code":"EXAMENCOMMISSIE_SECUNDAIR","value":false},{"code":"COMMUNICATIE_SAMENWERKING","value":true},{"code":"SOCIAAL_OVERLEG","value":false},{"code":"OMGAAN_INFORMATIE","value":false},{"code":"ONTWIKKELINGSPOTENTIEEL","value":false},{"code":"ONDERNEMERSZIN_ONDERNEMERSCHAP","value":false},{"code":"KNELPUNTBEROEP","knelpuntberoep":"","value":false},{"code":"STEM_OPLEIDING","value":true},{"code":"TOEKOMSTIG_TEKORT","document_uri":[],"value":false,"url":""},{"code":"VERPLICHT_ATTEST","wet":"","attest":"","value":false}],"hashedDocs":[{"details":{"name":"ODB_aanvraag_overzicht.pdf","uri":"EO/33286aa2-e68b-4a6b-99e0-9ff32c823eae/ODB_aanvraag_overzicht.pdf","publiek":true,"privaat":false},"checksum":"f90919930456b367ef80eed1abedede8"}],"timestamp":1538562337,"dateAddedToChainString":"03-10-2018 12:25:37"}
```

##### 2.2.3. CURL sample
`$ curl 'http://localhost:8080/api/aanvraag/33286aa2-e68b-4a6b-99e0-9ff32c823eae' -i -X GET
`
#### 2.3. Get history by id
Obtains the update history of an "aanvraag" from the blockchain

##### 2.4.1. Sample Request
```
GET /api/aanvraag/history/33286aa2-e68b-4a6b-99e0-9ff32c823eae HTTP/1.1
Host: localhost:8080
```

##### 2.4.2. Sample Response
```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 3987

[{"aanvraagNummer":"33286aa2-e68b-4a6b-99e0-9ff32c823eae","onderneming":{"ondernemingID":48632,"ondernemingsnummer":"0844407071"},"aanvraagType":"OC","paritairComite":null,"naamOpleiding":"Bloemschikken","referentie":"BS001","website":"http://www.blockchain.com","eerstVolgendeDatum":"2018-10-27","doelgroepOpleiding":"Doelgroep testje","urenAfstandonderwijs":"360","urenContactonderwijs":"360","urenWerkplekleren":"","studiepunten":null,"inhoud":"Inhoud testje","metModules":false,"werkplekleren":"NIET","modules":[],"doelgroepcode":"EA","ingediendOp":"2018-10-02T12:48:52.66","documenten":[],"zelfanalyse":[{"code":"BASISVAARDIGHEDEN","deelgebied":[{"code":"GELETTERDHEID","value":false},{"code":"REKENVAARDIGHEID","value":false},{"code":"ICT_BASIS","value":false}],"value":false},{"code":"TAALOPLEIDING","deelgebied":[{"code":"NL","value":false},{"code":"FR","value":false},{"code":"DE","value":false},{"code":"EN","value":false}],"value":false,"niveau":"Geen"},{"code":"DIPLOMA_SECUNDAIR_BEROEPKWALIFICATIE","beroep":"","kwalificatie":"DIPLOMA_SECUNDAIR_ONDERWIJS","value":false},{"code":"DIPLOMA_HOGER_ONDERWIJS","value":false},{"code":"NEDERLANDS_ANDERSTALIGEN","value":false},{"code":"EXAMENCOMMISSIE_SECUNDAIR","value":false},{"code":"COMMUNICATIE_SAMENWERKING","value":true},{"code":"SOCIAAL_OVERLEG","value":false},{"code":"OMGAAN_INFORMATIE","value":false},{"code":"ONTWIKKELINGSPOTENTIEEL","value":false},{"code":"ONDERNEMERSZIN_ONDERNEMERSCHAP","value":false},{"code":"KNELPUNTBEROEP","value":false,"knelpuntberoep":""},{"code":"STEM_OPLEIDING","value":true},{"code":"TOEKOMSTIG_TEKORT","value":false,"document_uri":[],"url":""},{"code":"VERPLICHT_ATTEST","wet":"","attest":"","value":false}],"hashedDocs":[{"details":{"name":"ODB_aanvraag_overzicht.pdf","uri":"EO/33286aa2-e68b-4a6b-99e0-9ff32c823eae/ODB_aanvraag_overzicht.pdf","publiek":true,"privaat":false},"checksum":"f90919930456b367ef80eed1abedede8"}],"timestamp":1538562333,"dateAddedToChainString":"03-10-2018 12:25:33"},{"aanvraagNummer":"33286aa2-e68b-4a6b-99e0-9ff32c823eae","onderneming":{"ondernemingID":48632,"ondernemingsnummer":"0844407071"},"aanvraagType":"OC","paritairComite":null,"naamOpleiding":"Bloemschikken","referentie":"BS001","website":"http://www.blockchain.com","eerstVolgendeDatum":"2018-10-27","doelgroepOpleiding":"Doelgroep testje","urenAfstandonderwijs":"360","urenContactonderwijs":"360","urenWerkplekleren":"","studiepunten":null,"inhoud":"Inhoud testje","metModules":false,"werkplekleren":"NIET","modules":[],"doelgroepcode":"EA","ingediendOp":"2018-10-02T12:48:52.66","documenten":[],"zelfanalyse":[{"code":"BASISVAARDIGHEDEN","deelgebied":[{"code":"GELETTERDHEID","value":false},{"code":"REKENVAARDIGHEID","value":false},{"code":"ICT_BASIS","value":false}],"value":false},{"code":"TAALOPLEIDING","deelgebied":[{"code":"NL","value":false},{"code":"FR","value":false},{"code":"DE","value":false},{"code":"EN","value":false}],"value":false,"niveau":"Geen"},{"code":"DIPLOMA_SECUNDAIR_BEROEPKWALIFICATIE","beroep":"","kwalificatie":"DIPLOMA_SECUNDAIR_ONDERWIJS","value":false},{"code":"DIPLOMA_HOGER_ONDERWIJS","value":false},{"code":"NEDERLANDS_ANDERSTALIGEN","value":false},{"code":"EXAMENCOMMISSIE_SECUNDAIR","value":false},{"code":"COMMUNICATIE_SAMENWERKING","value":true},{"code":"SOCIAAL_OVERLEG","value":false},{"code":"OMGAAN_INFORMATIE","value":false},{"code":"ONTWIKKELINGSPOTENTIEEL","value":false},{"code":"ONDERNEMERSZIN_ONDERNEMERSCHAP","value":false},{"code":"KNELPUNTBEROEP","value":false,"knelpuntberoep":""},{"code":"STEM_OPLEIDING","value":true},{"code":"TOEKOMSTIG_TEKORT","value":false,"document_uri":[],"url":""},{"code":"VERPLICHT_ATTEST","wet":"","attest":"","value":false}],"hashedDocs":[{"details":{"name":"ODB_aanvraag_overzicht.pdf","uri":"EO/33286aa2-e68b-4a6b-99e0-9ff32c823eae/ODB_aanvraag_overzicht.pdf","publiek":true,"privaat":false},"checksum":"f90919930456b367ef80eed1abedede8"}],"timestamp":1538562330,"dateAddedToChainString":"03-10-2018 12:25:30"}]
```

##### 2.4.3. CURL sample
`$ curl 'http://localhost:8080/api/aanvraag/history/33286aa2-e68b-4a6b-99e0-9ff32c823eae' -i -X GET`

### 3. Erkenning API
Collection of CRUD API endpoints used to retrieve "erkenningen" from the hyperledger blockchain

#### 3.1. Get all
Obtains all "erkenningen" from the blockchain.

##### 3.1.1. Sample Request
```
GET /api/erkenning HTTP/1.1
Host: localhost:8080
```

##### 3.1.2. Sample Response
```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 1450

[{"erkenning":{"id":386,"erkenningsnummer":"EO-1000091","opleidingsId":1394,"startdatum":"2018-10-02","einddatum":null,"erkendOp":"2018-10-02","status":"ACTIEF","stopzettingsdatum":null,"partner":null,"beslissendOrgaan":"VOC","stopzettingsReden":null,"stopzettingsOpmerking":null,"stopzettingDoor":null,"stopgezetOp":null},"opleiding":{"id":1394,"naam":"Opleiding 3","website":"https://www.google.com","doelgroepOpleiding":"sdf","eersteMaalIngericht":"2018-09-11","modulair":false,"studiepunten":null,"inhoud":"sdfsdf","referentie":"sfdkjhsjd","werkplekleren":"DEELS","modules":[],"totaalUren":0,"totaalUrenModules":0,"totaalStudiepuntenModules":0,"iscedversie":null,"iscedhoofdcategorie":null,"iscedsubcategorie":null},"opleidingsverstrekker":{"id":63,"uuid":"ad59b9fb-afc3-44c9-8967-4944d778b20e","ondernemingsNummer":"0467132994","ondernemingsNaam":"De Cronos Groep","ondernemingsID":51,"masterId":47557,"aangemaaktDoorLoketgebruikerNaam":null,"aangemaaktDoorLoketgebruikerUuid":null,"gewijzigdDoor":null,"kwaliteitslabel":"KMO_PORTEFEUILLE","kwaliteitslabelStatus":"GEVALIDEERD","kwaliteitslabelRegistratienummer":"DV.O1097236","volledig":true,"hogerOnderwijs":true,"contactVoornaam":null,"contactAchternaam":null,"contactEmail":null,"contactTelefoon":null,"website":"http://www.youhoo.com","publiekeNaam":"cronos opleidingen","kwaliteitPresent":true,"websiteFilledIn":true},"timestamp":1538562382,"dateAddedToChainString":"03-10-2018 12:26:22"}]

```

##### 3.1.3. CURL sample
`$ curl 'http://localhost:8080/api/erkenning' -i -X GET`


#### 3.2. Get by id
Obtains a specific "erkenning" from the blockchain by its unique identifier (ex. EO-1234567).

##### 3.2.1. Sample Request
```
GET /api/erkenning/history/EO-1000091 HTTP/1.1
Host: localhost:8080
```

##### 3.2.2. Sample Response
```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 1448

{"erkenning":{"id":386,"erkenningsnummer":"EO-1000091","opleidingsId":1394,"startdatum":"2018-10-02","einddatum":null,"erkendOp":"2018-10-02","status":"ACTIEF","stopzettingsdatum":null,"partner":null,"beslissendOrgaan":"VOC","stopzettingsReden":null,"stopzettingsOpmerking":null,"stopzettingDoor":null,"stopgezetOp":null},"opleiding":{"id":1394,"naam":"Opleiding 3","website":"https://www.google.com","doelgroepOpleiding":"sdf","eersteMaalIngericht":"2018-09-11","modulair":false,"studiepunten":null,"inhoud":"sdfsdf","referentie":"sfdkjhsjd","werkplekleren":"DEELS","modules":[],"totaalUren":0,"totaalUrenModules":0,"totaalStudiepuntenModules":0,"iscedversie":null,"iscedhoofdcategorie":null,"iscedsubcategorie":null},"opleidingsverstrekker":{"id":63,"uuid":"ad59b9fb-afc3-44c9-8967-4944d778b20e","ondernemingsNummer":"0467132994","ondernemingsNaam":"De Cronos Groep","ondernemingsID":51,"masterId":47557,"aangemaaktDoorLoketgebruikerNaam":null,"aangemaaktDoorLoketgebruikerUuid":null,"gewijzigdDoor":null,"kwaliteitslabel":"KMO_PORTEFEUILLE","kwaliteitslabelStatus":"GEVALIDEERD","kwaliteitslabelRegistratienummer":"DV.O1097236","volledig":true,"hogerOnderwijs":true,"contactVoornaam":null,"contactAchternaam":null,"contactEmail":null,"contactTelefoon":null,"website":"http://www.youhoo.com","publiekeNaam":"cronos opleidingen","kwaliteitPresent":true,"websiteFilledIn":true},"timestamp":1538562387,"dateAddedToChainString":"03-10-2018 12:26:27"}
```

##### 3.2.3. CURL sample
`$ curl 'http://localhost:8080/api/erkenning/EO-1000091' -i -X GET`


#### 3.3. Get history
Obtains the history (data trail) of an "erkenning" by id

##### 3.3.1. Sample Request
```
GET /api/erkenning/history/EO-1000091 HTTP/1.1
Host: localhost:8080
```

##### 3.3.2. Sample Response
```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 2899

[{"erkenning":{"id":386,"erkenningsnummer":"EO-1000091","opleidingsId":1394,"startdatum":"2018-10-02","einddatum":null,"erkendOp":"2018-10-02","status":"ACTIEF","stopzettingsdatum":null,"partner":null,"beslissendOrgaan":"VOC","stopzettingsReden":null,"stopzettingsOpmerking":null,"stopzettingDoor":null,"stopgezetOp":null},"opleiding":{"id":1394,"naam":"Opleiding 3","website":"https://www.google.com","doelgroepOpleiding":"sdf","eersteMaalIngericht":"2018-09-11","modulair":false,"studiepunten":null,"inhoud":"sdfsdf","referentie":"sfdkjhsjd","werkplekleren":"DEELS","modules":[],"totaalUren":0,"totaalUrenModules":0,"totaalStudiepuntenModules":0,"iscedversie":null,"iscedhoofdcategorie":null,"iscedsubcategorie":null},"opleidingsverstrekker":{"id":63,"uuid":"ad59b9fb-afc3-44c9-8967-4944d778b20e","ondernemingsNummer":"0467132994","ondernemingsNaam":"De Cronos Groep","ondernemingsID":51,"masterId":47557,"aangemaaktDoorLoketgebruikerNaam":null,"aangemaaktDoorLoketgebruikerUuid":null,"gewijzigdDoor":null,"kwaliteitslabel":"KMO_PORTEFEUILLE","kwaliteitslabelStatus":"GEVALIDEERD","kwaliteitslabelRegistratienummer":"DV.O1097236","volledig":true,"hogerOnderwijs":true,"contactVoornaam":null,"contactAchternaam":null,"contactEmail":null,"contactTelefoon":null,"website":"http://www.youhoo.com","publiekeNaam":"cronos opleidingen","kwaliteitPresent":true,"websiteFilledIn":true},"timestamp":1538562385,"dateAddedToChainString":"03-10-2018 12:26:25"},{"erkenning":{"id":386,"erkenningsnummer":"EO-1000091","opleidingsId":1394,"startdatum":"2018-10-02","einddatum":null,"erkendOp":"2018-10-02","status":"ACTIEF","stopzettingsdatum":null,"partner":null,"beslissendOrgaan":"VOC","stopzettingsReden":null,"stopzettingsOpmerking":null,"stopzettingDoor":null,"stopgezetOp":null},"opleiding":{"id":1394,"naam":"Opleiding 3","website":"https://www.google.com","doelgroepOpleiding":"sdf","eersteMaalIngericht":"2018-09-11","modulair":false,"studiepunten":null,"inhoud":"sdfsdf","referentie":"sfdkjhsjd","werkplekleren":"DEELS","modules":[],"totaalUren":0,"totaalUrenModules":0,"totaalStudiepuntenModules":0,"iscedversie":null,"iscedhoofdcategorie":null,"iscedsubcategorie":null},"opleidingsverstrekker":{"id":63,"uuid":"ad59b9fb-afc3-44c9-8967-4944d778b20e","ondernemingsNummer":"0467132994","ondernemingsNaam":"De Cronos Groep","ondernemingsID":51,"masterId":47557,"aangemaaktDoorLoketgebruikerNaam":null,"aangemaaktDoorLoketgebruikerUuid":null,"gewijzigdDoor":null,"kwaliteitslabel":"KMO_PORTEFEUILLE","kwaliteitslabelStatus":"GEVALIDEERD","kwaliteitslabelRegistratienummer":"DV.O1097236","volledig":true,"hogerOnderwijs":true,"contactVoornaam":null,"contactAchternaam":null,"contactEmail":null,"contactTelefoon":null,"website":"http://www.youhoo.com","publiekeNaam":"cronos opleidingen","kwaliteitPresent":true,"websiteFilledIn":true},"timestamp":1538562382,"dateAddedToChainString":"03-10-2018 12:26:22"}]
```

##### 3.3.3. CURL sample
`$ curl 'http://localhost:8080/api/erkenning/history/EO-1000091' -i -X GET`
