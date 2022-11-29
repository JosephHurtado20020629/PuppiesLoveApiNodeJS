import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const options = {
    definition: {
        openapi: '3.0.0',
        options: {   
            swaggerDefinition: {
                info: {
                    title: 'Puppie Love API',
                    version: '1.0.0',
                    description: 'Puppie Love API',
                },
            },
        },
    },
    apis: ['./src/routes/*.js'],
};


const specs = swaggerJSDoc(options);

const swagger = (app,port) => {
    app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    });


    console.log("Swagger iniciado en http://localhost:"+port+"/api-docs");
}

  export default swagger;