log.info("Sampler: Start of sampler script")
log.info("Groovy previous response code "+ prev.getResponseCode())

def gettingResponseCode = prev.getResponseCode()
// prev.getResponseCode() -> returns string 

log.info(gettingResponseCode)

if (gettingResponseCode == "200"){
log.info("Successfully retrieved Response code")
} else {
    log.info("No previous failling responses")
}

log.info("Sampler: End of samplerTestScript")