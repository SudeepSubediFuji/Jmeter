import java.lang.*;

log.info("Sampler: Start of sampler script")

log.info("Response data :" + prev.getResponseDataAsString())

log.info("Groovy previous response code "+ prev.getResponseCode())
def gettingResponseCode = prev.getResponseCode()
// prev.getResponseCode() -> returns string 

log.info(gettingResponseCode)

if (gettingResponseCode == "200"){
log.warn("Successfully retrieved Response code")
    SampleResult.setSuccessful(true);
    SampleResult.setResponseCode("200");

} else if (gettingResponseCode == "500"){
    log.error("500 status code")
    SampleResult.setSuccessful(false);
    SampleResult.setResponseCode("500");
} else {
    log.error("\nStatus code error: "+ gettingResponseCode +"\n")
    SampleResult.setSuccessful(false);
    SampleResult.setResponseCode(gettingResponseCode);
}

log.info("Sampler: End of samplerTestScript")


