log.info("Start of preTestScript")
// Cannot invoke the prev method as the pre test is run before it .
// log.info("Groovy previous response code "+ prev.getResponseCode())




def user = vars.get("username")
def pass = vars.get("password")


// Encoding required ??

def unencoded = "what%27s%20the%20temperature%20in%20yokohama,%20japan?"
def msg = "what's the temperature in yokohama, japan?"
log.info("Username :"+ user + "\n Password :" + pass)

log.info("Message insertion")

vars.put("message",unencoded)

def message = vars.get("message")
log.info("This is a message: "+message)

props.getIterator().each { entry-> 
log.info("Properties name: ${entry.key} , properties value: ${entry.value}")
}


log.info("End of preTestScript")
