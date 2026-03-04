import java.text.SimpleDateFormat
import java.util.Date

printf("Groovy test script is executed successfully. ")

// log.info("Groovy test script is executed successfully. SamplerData: " + SamplerData + " Previous data : "+ prev.getResponseCode());
log.info("Groovy test script is executed successfully. 2222???");

log.warn("Warning log test")

log.info("Groovy previous response code "+ prev.getResponseCode())

log.info("Groovy test samplerData")

log.info("Jmeter default Vars object: "+ vars);
// java.util.Properties object
log.info("Jmeter default java.util.Properties object: "+ props);

vars.getIterator().each { entry-> 
log.info("Variable name: ${entry.key} , Variable value: ${entry.value}")
}

// props.getIterator().each { entry-> 
// log.info("Properties name: ${entry.key} , properties value: ${entry.value}")
// }

// log.info("props value test: " + props[1] + props[2]);

props.each{ prop->
log.info("Properties name: ${prop.key}, Properties value: ${prop.value} ")
}


log.info("Jmeter Ctx context : " + ctx)
log.info("Jmeter Ctx class : " + ctx.getClass())

log.info("prev : "+ prev)

vars.class.methods.each { method-> 
log.info("The list of methods in vars ${method.name}")
}

// START.YMD START.HMS START.MS
def startTimeYMD = vars.get("START.YMD")
def startTimeHMS = vars.get("START.HMS")
def startTimeMs = vars.get("START.MS");

long startTime = startTimeYMD + " " + startTimeHMS+ ":" + startTimeMs
def startTimeparse = long.parse(startTime);
def startDateTime = new Date(startTimeparse);
def formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS")

try {
    def formated_time = formatter.parse(startDateTime)
    log.info("Start Time :", formated_time.toString())
} catch ( e ) {
    // log.info
    log.info("Unparseable date:", e)
}

log.info("Vars method checker: "+ formatter)













