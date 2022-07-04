import app from "./src/app";
import config from "./config";

const PORT = config.PORT;

app.listen(PORT, () => console.log("App started running on ", PORT));
