log.info("Post: Start of postTestScript")
log.info("Groovy previous response code "+ prev.getResponseCode())

if (prev.isSuccessful()){
log.info("Post: Successfully retrieved Response code")
log.info("Post: Header:"+ prev.getResponseHeaders())
log.info("Post: Content:"+ prev.getContentType())
log.info("Post: ThreadName:" + prev.getThreadName())

} else {
log.info("Post: Failed to retrieve!")
}

log.info("Post: End of PostTestScript")