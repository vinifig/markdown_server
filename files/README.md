# Simulador API

## Endpoint Reference

| METHOD |         ENDPOINT         |        USAGE       |      RETURNS     |
|:------:|:------------------------:|:------------------:|:----------------:|
|   GET  | /profiles/id/{type}/{id} |   Get an profile   |     Profile      |
|   GET  |      /profiles/list      |  Get all profiles  |     Profiles     |
|  POST  |       /profiles/add      | Create new profile | Operation Result |
|  POST  |      /profiles/edit      |   Edit an profile  | Operation Result |
|  POST  |     /profiles/delete     |  Delete an profile | Operation Result |
|   GET  | /radios/id/{type}/{id}   |   Get an radio     |      Radio       |
|   GET  |      /radios/list        |  Get all radios    |     Radios       |
|  POST  |       /radios/add        | Create new radio   | Operation Result |
|  POST  |      /radios/edit        |   Edit an radio    | Operation Result |
|  POST  |     /radios/delete       |  Delete an radio   | Operation Result |
|   GET  | /groups/id/{type}/{id}   |   Get an Group     |      Group       |
|   GET  |      /groups/list        |  Get all Groups    |     Groups       |
|  POST  |       /groups/add        | Create new group   | Operation Result |
|  POST  |      /groups/edit        |   Edit an group    | Operation Result |
|  POST  |     /groups/delete       |  Delete an group   | Operation Result |
|   GET  |    /ckr/id/{type}/{id}   |   Get an Key       |      Key         |
|   GET  |      /ckr/list           |  Get all Keys      |     Keys         |
|  POST  |       /ckr/add           | Create new key     | Operation Result |
|  POST  |      /ckr/edit           |   Edit an key      | Operation Result |
|  POST  |     /ckr/delete          |  Delete an key     | Operation Result |


## Profiles

### Radio Interconnect Profile

#### /profiles/id/radio_interconnect_profile/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "570d4e03a96bc9543cf02153",
    "id": "1",
    "alias": "alias_name",
    "type": "radio_interconnect_profile",
    "configurations": {
      "priority_level": "",
      "multigroup_enabled": "",
      "multigroup_emergency_enabled": "",
      "inactivity_timeout_enabled": "",
      "call_alert_enabled": "",
      "pc_enabled": "",
      "dispatch_enabled": ""
    }
  }
}
```

### Radio Capabilities Profile

#### /profiles/id/radio_capabilities_profile/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "570d4e03a96bc9543cf02153",
    "id": "1",
    "alias": "alias_name",
    "type": "radio_capabilities_profile",
    "configurations": {
      "priority_level": "",
      "mobile_to_land": "",
      "exclusion_number": ""
    }
  }
}
```

### Radio Site Access Profile

#### /profiles/id/radio_site_access_profile/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "570d4e03a96bc9543cf02153",
    "id": "1",
    "alias": "alias_name",
    "type": "radio_site_access_profile",
    "configurations": {
      "include_or_exclude": "",
      "list_of_valid_sites": ""
    }
  }
}
```

### TGMG Site Access Profile

#### /profiles/id/tgmg_site_access_profile/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "570d4e03a96bc9543cf02153",
    "id": "1",
    "alias": "alias_name",
    "type": "tgmg_site_access_profile",
    "configurations": {
      "include_or_exclude": "",
      "list_of_valid_sites": ""
    }
  }
}
```
### TGMG Capabilities Profile

#### /profiles/id/tgmg_capabilities_profile/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "570d4e03a96bc9543cf02153",
    "id": "1",
    "alias": "alias_name",
    "type": "tgmg_capabilities_profile",
    "configurations": {
      "conversation_type":"",
      "busy_override":"",
      "emergency_enabled":"",
      "emergency_at_invalid_sites":"",
      "emergency_queue_mode":"",
      "priority_level":"",
      "priority_monitor":"",
      "security_communication_mode_default":"",
      "security_communication_mode":"",
      "inactivity_timeout":"",
      "status_acknowledged":"",
      "emergency_acknowledged":"",
      "audio_interrupt_mode":"",
      "preemption":"",
      "multisystem":""
    }
  }
}
```

### General Profiles

#### /profiles/id/{type}/{id}
<br>
Failure output example:
```json
{
  "status": 404
}
```

#### /profiles/list
<br>
Success output example:
```json
{
  "status": 200,
  "data": [
    {
      "_id": "570d4e03a96bc9543cf02153",
      "id": "1",
      "alias": "asd",
      "type": "radio_interconnect_profile",
      "configurations": {
        "conversation_type":"",
        "busy_override":"",
        "emergency_enabled":"",
        "emergency_at_invalid_sites":"",
        "emergency_queue_mode":"",
        "priority_level":"",
        "priority_monitor":"",
        "security_communication_mode_default":"",
        "security_communication_mode":"",
        "inactivity_timeout":"",
        "status_acknowledged":"",
        "emergency_acknowledged":"",
        "audio_interrupt_mode":"",
        "preemption":"",
        "multisystem":""
      }
    }
  ]
}
```

Failure output example:
```json
{
  "status": 404
}
```

#### /profiles/add
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "radio_interconnect_profile",
  "priority_level": "",
  "multigroup_enabled": "",
  "multigroup_emergency_enabled": "",
  "inactivity_timeout_enabled": "",
  "call_alert_enabled": "",
  "pc_enabled": "",
  "dispatch_enabled": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /profiles/edit
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "radio_interconnect_profile",
  "priority_level": "",
  "multigroup_enabled": "",
  "multigroup_emergency_enabled": "",
  "inactivity_timeout_enabled": "",
  "call_alert_enabled": "",
  "pc_enabled": "",
  "dispatch_enabled": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /profiles/delete
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "{type}"
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

## Radios

### IVD RADIO

#### /radios/id/ivd_radio/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "",
    "id": "1",
    "alias": "asd",
    "type": "ivd_radio",
    "configurations": {
      "voice_enabled": "",
      "data_enabled": "",
      "interconnect_enabled": "",
      "emergency": "",
      "communication_mode": ""
    }
  }
}
```

#### /radios/list
<br>
Success output example:
```json
{
  "status": 200,
  "data": [
    {
      "_id": "",
      "id": "1",
      "alias": "asd",
      "type": "ivd_radio",
      "configurations": {
        "voice_enabled": "",
        "data_enabled": "",
        "interconnect_enabled": "",
        "emergency": "",
        "communication_mode": ""
      }
    }
  ]
}
```

#### /radios/add
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "ivd_radio",
  "voice_enabled": "",
  "data_enabled": "",
  "interconnect_enabled": "",
  "emergency": "",
  "communication_mode": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /radios/edit
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "radio_interconnect_profile",
  "voice_enabled": "",
  "data_enabled": "",
  "interconnect_enabled": "",
  "emergency": "",
  "communication_mode": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /radios/delete
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "{type}"
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

## Groups

### Talkgroup and Multigroup

#### /groups/id/{type}/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "",
    "id": "1",
    "alias": "asd",
    "type": "type",
    "configurations": {
      "enabled": "",
      "access_type": "",
      "channel_selection": "",
      "interrupt_wait": ""
    }
  }
}
```

#### /groups/list
<br>
Success output example:
```json
{
  "status": 200,
  "data": [{
    "_id": "",
    "id": "1",
    "alias": "asd",
    "type": "{type}",
    "configurations": {
      "enabled": "",
      "access_type": "",
      "channel_selection": "",
      "interrupt_wait": ""
    }
  }]
}
```

#### /groups/add
<br>
Input example:
```json
{
  "id": "1",
  "alias": "asd",
  "type": "{type}",
  "enabled": "",
  "access_type": "",
  "channel_selection": "",
  "interrupt_wait": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /groups/edit
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "{type}",
  "enabled": "",
  "access_type": "",
  "channel_selection": "",
  "interrupt_wait": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /groups/delete
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "{type}"
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

## System/Secure

### Common Key Reference

#### /ckr/id/{type}/{id}
<br>
Success output example:
```json
{
  "status": 200,
  "data": {
    "_id": "",
    "id": "1",
    "alias": "asd",
    "type": "ckr",
    "configurations": {
      "date": "",
      "key": ""
    }
  }
}
```

#### /ckr/list
<br>
Success output example:
```json
{
  "status": 200,
  "data": [{
    "_id": "",
    "id": "1",
    "alias": "asd",
    "type": "ckr",
    "configurations": {
      "date": "",
      "key": ""
    }
  }]
}
```

#### /ckr/add
<br>
Input example:
```json
{
  "id": "1",
  "alias": "asd",
  "type": "ckr",
  "date": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /ckr/edit
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "ckr",
  "date": ""
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```

#### /ckr/delete
<br>
Input example:
```json

{
  "id": "1",
  "alias": "asd",
  "type": "ckr"
}
```

Success output example:
```json
{
  "status": 201
}
```
Failure output example:
```json
{
  "status": 200
}
```
