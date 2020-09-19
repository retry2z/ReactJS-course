import express from 'express';
import path from 'path';

// import middleware
import serverRenderer from './middleware/renderer';

// initialize the application and create the routes
const PORT = process.env.PORT || 3000;

// initialize the application and create the routes
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
router.use('*', serverRenderer);
app.use(router);

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});