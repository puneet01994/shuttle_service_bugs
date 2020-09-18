import createLogstash from "logstash";
const url = "http://localhost:5043/";
const logger = createLogstash(url);
export default logger;
