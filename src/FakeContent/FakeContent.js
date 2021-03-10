export const FakeContent = [
        {
            titulo :{ 
                nombre : 'Download',
                id: 'download-section',
                subTitulo : false
            },
                contenido : [
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'button',
                            cont : 'Download PrettyDocs',
                            typeButton : 'btn-primary',
                            liga : "https://themes.3rdwavemedia.com/bootstrap-templates/startup/prettydocs-free-bootstrap-theme-for-developers-and-startups/"
                        }, 
                        {
                            type : 'button',
                            cont : 'Nuevo Boton',
                            typeButton : 'btn-info',
                            liga : "https://themes.3rdwavemedia.com/bootstrap-templates/startup/prettydocs-free-bootstrap-theme-for-developers-and-startups/"
                        }
                ],
                subContent : []

        },
        {
            titulo :{ 
                nombre : 'installation',
                id: 'installation-section',
                subTitulo : true,
                } ,
            subContent : [
                { texto: 'Step One',
                    id: 'step1',
                    contenido : [
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'language-markup',
                            cont :`
                            <Fragment>
                            <html lang="en"> 
                                ...
                                <div class="jumbotron"> 
                                    <h1>Hello, world!</h1> 
                                    <p>...</p> 
                                    <p>< a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> 
                                </div>
                                <div class="jumbotron"> 
                                    <h1>Hello, world!</h1> 
                                    <p>...</p> 
                                    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> 
                                </div>
                                ...
                            </html>
                            </Fragment>
                            `
                        }
                ] },
                { texto: 'Step Two',
                    id: 'step2' ,
                    contenido : [
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'language-css',
                            cont : `
        .App-header {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
            }
            
            .App-link {
            color: #61dafb;
            }
                                                         
                            `
                           
                        }
                ]},
                { texto: 'Step Three',
                    id: 'step3' ,
                    contenido : [
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'parrafo',
                            cont :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.'
                        },
                        {
                            type : 'language-javascript',
                            cont : `
                            <script> 
                                function myFunction(a, b) { 
                                    return a * b; 
                                } 
                                
                                document.getElementById("demo").innerHTML = myFunction(4, 3); 
                            </script>
             
                            `
                        }
                ]}
            ] ,
            contenido : []
<<<<<<< HEAD
        },{
            titulo : {
            nombre :'Code',
            id : 'code-section',
            subTitulo : true 
        },
        contenido : [
                        {
                            type : 'parrafo',
                            cont :'PrismJS is used as the syntax highlighter here. You can build your own version via their website should you need to.'
                        }
                ],
            subContent : [
                {texto :'HTML' ,
                id: 'html'},
                { texto :'CSS' ,
                id: 'css'},
                { texto :'Sass' ,
                id: 'sass'},
                { texto :'LESS' ,
                id: 'less'},
                { texto :'JavaScript' ,
                id: 'javascript'},
                { texto :'Python' ,
                id: 'python'},
                { texto :'PHP' ,
                id: 'php'},
                { texto :'Handlebars' ,
                id: 'handlebars'}

            ]
=======
>>>>>>> 68530055f7dddad7fb9e91d965fdf7bfdfb54bb2
        } ,
        {
            titulo : {
                nombre : 'Alertas',
                id: 'alerta-section',
                subTitulo : false
            } , contenido : [
                {
                    type : 'alerta',
                    alertType : 'callout-info',
                    titulo : 'Alerta Uno',
                    cont :'Cuerpo de la alerta aqui va todo'
                },
                {
                    type : 'alerta',
                    alertType : 'callout-warning',
                    titulo : 'Alerta Dos',
                    cont :'Cuerpo de la alerta aqui va todo'
                },
                {
                    type : 'alerta',
                    alertType : 'callout-success',
                    titulo : 'Alerta Tres',
                    cont :'Cuerpo de la alerta aqui va todo'
                },
                {
                    type : 'alerta',
                    alertType : 'callout-danger',
                    titulo : 'Alerta Cuatro',
                    cont :'Cuerpo de la alerta aqui va todo'
                }
        ]
        }
        // ,
        // {
        //     titulo : {
        //     nombre :'Code',
        //     id : 'code-section',
        //     subTitulo : true ,
            
        // },
        //     subContent : [
        //         {texto :'HTML' ,
        //         id: 'html'},
        //         { texto :'CSS' ,
        //         id: 'css'},
        //         { texto :'Sass' ,
        //         id: 'sass'},
        //         { texto :'LESS' ,
        //         id: 'less'},
        //         { texto :'JavaScript' ,
        //         id: 'javascript'},
        //         { texto :'Python' ,
        //         id: 'python'},
        //         { texto :'PHP' ,
        //         id: 'php'},
        //         { texto :'Handlebars' ,
        //         id: 'handlebars'}

        //     ]
        // } ,
        // {
        //     titulo :{ 
        //         nombre : 'Callouts',
        //         id: 'callouts-section',
        //         subTitulo : false,},
        // },{
        //     titulo :{ 
        //         nombre : 'Tables',
        //         id: 'tables-section',
        //         subTitulo : false,},
        // },{
        //     titulo :{ 
        //         nombre : 'Buttons',
        //         id: 'buttons-section',
        //         subTitulo : false,},
        // },{
        //     titulo :{ 
        //         nombre : 'Video',
        //         id: 'video-section',
        //         subTitulo : false,},
        // },{
        //     titulo :{ 
        //         nombre : 'Icons',
        //         id: 'icons-section',
        //         subTitulo : false,},
        // }
    ]

