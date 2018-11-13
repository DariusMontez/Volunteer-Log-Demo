11/6/18 2041-2130

```
Log {
    has_many LogEntry
    name: 'string'
}

LogEntry {
    has_one Log
    description: 'string',
    hours: 'decimal'
}

generate model Log title description

generate model LogEntry hours 
```

11/7/18 1640-1740

# To-Do list

## Front-end

## Actions (mutations)

 [ ] CREATE_LOG(title, description)
 [ ] UPDATE_LOG(id, title, description)
 [ ] DELETE_LOG(id)

 [ ] ADD_LOG_ENTRY(logId, hours, description)
 [ ] UPDATE_LOG_ENTRY(logId, hours, description)
 [ ] DELETE_LOG_ENTRY(logId)

## Back-end

### Actions (Mutations)

 [x] CREATE_LOG(title, description)
 [x] UPDATE_LOG(id, title, description)
 [ ] DELETE_LOG(id)

 [x] ADD_LOG_ENTRY(logId, hours, description)
 [ ] UPDATE_LOG_ENTRY(logId, hours, description)
 [ ] DELETE_LOG_ENTRY(logId)

### Getters

 [x] log/fetch

11/7/18 2028-2210

title vs name:
    names are unique, titles should be different
    name is a symbol
    titles are assigned
    
11/8/18 0830-1000
