const app = require('./src/app');

const MODE = process.env.NODE_ENV;
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT} in ${MODE} mode`));
