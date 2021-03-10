import React from 'react'
import { CrearContennido } from '../../../fun/CrearContennido'


export const Contenido = ({ datosDoc }) => {

    console.log( datosDoc )


    // datosDoc.map(res=>console.log( res.contenido))

    return (
        <div className="content-inner">
        {
            datosDoc.map( datoDoc => (
               
                datoDoc.contenido !== undefined ? (
                    <CrearContennido 
                        contenido={ datoDoc.contenido } 
                        titulo={ datoDoc.titulo } 
                        subContent={ datoDoc.subContent } 
                        />
                ):null
                
                
                
                
            ) )
        }

        <section id="code-section" className="doc-section">
            <h2 className="section-title">Ceeeeeode</h2>
            <pre>
            <code className="language-markup">
            &lt;!DOCTYPE html&gt; {"\n"}&lt;html lang="en"&gt; {"\n"}{"    "}...{"\n"}{"    "}&lt;div class="jumbotron"&gt; {"\n"}{"        "}&lt;h1&gt;Hello, world!&lt;/h1&gt; {"\n"}{"        "}&lt;p&gt;...&lt;/p&gt; {"\n"}{"        "}&lt;p&gt;&lt;a class="btn btn-primary btn-lg" href="#" role="button"&gt;Learn more&lt;/a&gt;&lt;/p&gt; {"\n"}{"    "}&lt;/div&gt;{"\n"}{"    "}&lt;div class="jumbotron"&gt; {"\n"}{"        "}&lt;h1&gt;Hello, world!&lt;/h1&gt; {"\n"}{"        "}&lt;p&gt;...&lt;/p&gt; {"\n"}{"        "}&lt;p&gt;&lt;a class="btn btn-primary btn-lg" href="#" role="button"&gt;Learn more&lt;/a&gt;&lt;/p&gt; {"\n"}{"    "}&lt;/div&gt;{"\n"}{"    "}...{"\n"}&lt;/html&gt;
            </code>
            </pre>
            <div className="section-block">
                <p>
            </p>
            </div>{/*//section-block*/}
            <div id="html" className="section-block">
                <div className="callout-block callout-success">
                    <div className="icon-holder">
                        <i className="fas fa-thumbs-up" />
                    </div>{/*//icon-holder*/}
                    <div className="content">
                        <h4 className="callout-title">Useful Tip:</h4>
                        <p>You can use this online <a href="https://mothereff.in/html-entities" target="_blank">HTML entity encoder/decoder</a> to generate your code examples.</p>
                    </div>{/*//content*/}
                </div>
                <div className="code-block">
                    <h6>HTML Code Example</h6>
                    <pre>
                    <code className="language-markup">
                    &lt;!DOCTYPE html&gt; {"\n"}&lt;html lang="en"&gt; {"\n"}{"    "}...{"\n"}{"    "}&lt;div class="jumbotron"&gt; {"\n"}{"        "}&lt;h1&gt;Hello, world!&lt;/h1&gt; {"\n"}{"        "}&lt;p&gt;...&lt;/p&gt; {"\n"}{"        "}&lt;p&gt;&lt;a class="btn btn-primary btn-lg" href="#" role="button"&gt;Learn more&lt;/a&gt;&lt;/p&gt; {"\n"}{"    "}&lt;/div&gt;{"\n"}{"    "}&lt;div class="jumbotron"&gt; {"\n"}{"        "}&lt;h1&gt;Hello, world!&lt;/h1&gt; {"\n"}{"        "}&lt;p&gt;...&lt;/p&gt; {"\n"}{"        "}&lt;p&gt;&lt;a class="btn btn-primary btn-lg" href="#" role="button"&gt;Learn more&lt;/a&gt;&lt;/p&gt; {"\n"}{"    "}&lt;/div&gt;{"\n"}{"    "}...{"\n"}&lt;/html&gt;
                    </code>
                    </pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="css" className="section-block">
                <div className="code-block">
                    <h6>CSS Code Example</h6>
                    <pre><code className="language-css">/* ======= Base Styling ======= */{"\n"}body {"{"}{"\n"}{"    "}font-family: 'Open Sans', arial, sans-serif; {"\n"}{"    "}color: #333; {"\n"}{"    "}font-size: 16px; {"\n"}{"    "}-webkit-font-smoothing: antialiased; {"\n"}{"    "}-moz-osx-font-smoothing: grayscale; {"\n"}{"}"}</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="sass" className="section-block">
                <div className="code-block">
                    <h6>SCSS Code Example</h6>
                    <pre><code className="language-css">@mixin transform($property) {"{"}{"\n"}{"  "}-webkit-transform: $property;{"\n"}{"      "}-ms-transform: $property;{"\n"}{"          "}transform: $property;{"\n"}{"}"}{"\n"}{"\n"}.box {"{"} @include transform(rotate(30deg)); {"}"}</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="less" className="section-block">
                <div className="code-block">
                    <h6>LESS Code Example</h6>
                    <pre><code className="language-css">@base: #f04615;{"\n"}@width: 0.5;{"\n"}{"\n"}.class {"{"}{"\n"}{"  "}width: percentage(@width); // returns `50%`{"\n"}{"  "}color: saturate(@base, 5%);{"\n"}{"  "}background-color: spin(lighten(@base, 25%), 8);{"\n"}{"}"}</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="javascript" className="section-block">
                <div className="code-block">
                    <h6>JavaScript Code Example</h6>
                    <pre><code className="language-javascript">&lt;script&gt; {"\n"}{"    "}function myFunction(a, b) {"{"} {"\n"}{"        "}return a * b; {"\n"}{"    "}{"}"} {"\n"}{"    "}{"\n"}{"    "}document.getElementById("demo").innerHTML = myFunction(4, 3); {"\n"}&lt;/script&gt;</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="python" className="section-block">
                <div className="code-block">
                    <h6>Python Code Example</h6>
                    <pre><code className="language-python">&gt;&gt;&gt; x = int(input("{"\n"}Please enter an integer: ")) Please enter an integer: 42 {"\n"}&gt;&gt;&gt; if x &lt; 0: {"\n"}... x = 0 {"\n"}... print('Negative changed to zero') {"\n"}... elif x == 0: {"\n"}... print('Zero') {"\n"}... elif x == 1: {"\n"}... print('Single') {"\n"}... else: {"\n"}... print('More') {"\n"}... More</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="php" className="section-block">
                <div className="code-block">
                    <h6>PHP Code Example</h6>
                    <pre><code className="language-php">&lt;?php {"\n"}$txt = "Hello world!"; {"\n"}$x = 5; {"\n"}$y = 10.5; {"\n"}{"\n"}echo $txt; {"\n"}echo "&lt;br&gt;"; {"\n"}echo $x; {"\n"}echo "&lt;br&gt;"; {"\n"}echo $y; {"\n"}?&gt;</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
            <div id="handlebars" className="section-block">
                <div className="code-block">
                    <h6>Handlebars Code Example</h6>
                    <pre><code className="language-handlebars">Handlebars.registerHelper('list', function(items, options) {"{"} {"\n"}{"  "}var out = "&lt;ul&gt;"; {"\n"}{"  "}{"\n"}{"  "}for(var i=0, l=items.length; i&lt;l; i++) {"{"} {"\n"}{"    "}out = out + "&lt;li&gt;" + options.fn(items[i]) + "&lt;/li&gt;"; {"\n"}{"  "}{"}"} {"\n"}{"  "}{"\n"}{"  "}return out + "&lt;/ul&gt;"; {"\n"}{"}"});</code></pre>
                </div>{/*//code-block*/}
                <div className="code-block">
                    <h6>Git Code Example</h6>
                    <pre><code className="language-git">$ git add Documentation.txt</code></pre>
                </div>{/*//code-block*/}
            </div>{/*//section-block*/}
        </section>{/*//doc-section*/}





        
        <section id="callouts-section" className="doc-section">
            <h2 className="section-title">Callouts</h2>
            <div className="section-block">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
</p>
            </div>
            <div className="section-block">
                <div className="callout-block callout-info">
                    <div className="icon-holder">
                        <i className="fas fa-info-circle" />
                    </div>{/*//icon-holder*/}
                    <div className="content">
                        <h4 className="callout-title">Aenean imperdiet</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <code>&lt;code&gt;</code> , Nemo enim ipsam voluptatem quia voluptas <a href="#">link example</a> sit aspernatur aut odit aut fugit.</p>
                    </div>{/*//content*/}
                </div>{/*//callout-block*/}
                <div className="callout-block callout-warning">
                    <div className="icon-holder">
                        <i className="fas fa-bug" />
                    </div>{/*//icon-holder*/}
                    <div className="content">
                        <h4 className="callout-title">Morbi posuere</h4>
                        <p>Nunc hendrerit odio quis dignissim efficitur. Proin ut finibus libero. Morbi posuere fringilla felis eget sagittis. Fusce sem orci, cursus in tortor <a href="#">link example</a> tellus vel diam viverra elementum.</p>
                    </div>{/*//content*/}
                </div>{/*//callout-block*/}
                <div className="callout-block callout-success">
                    <div className="icon-holder">
                        <i className="fas fa-thumbs-up" />
                    </div>{/*//icon-holder*/}
                    <div className="content">
                        <h4 className="callout-title">Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <a href="#">Link example</a> aenean commodo ligula eget dolor.</p>
                    </div>{/*//content*/}
                </div>{/*//callout-block*/}
                <div className="callout-block callout-danger">
                    <div className="icon-holder">
                        <i className="fas fa-exclamation-triangle" />
                    </div>{/*//icon-holder*/}
                    <div className="content">
                        <h4 className="callout-title">Interdum et malesuada</h4>
                        <p>Morbi eget interdum sapien. Donec sed turpis sed nulla lacinia accumsan vitae ut tellus. Aenean vestibulum <a href="#">Link example</a> maximus ipsum vel dignissim. Morbi ornare elit sit amet massa feugiat, viverra dictum ipsum pellentesque. </p>
                    </div>{/*//content*/}
                </div>{/*//callout-block*/}
            </div>
        </section>{/*//doc-section*/}
        <section id="tables-section" className="doc-section">
            <h2 className="section-title">Tables</h2>
            <div className="section-block">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.
</p>
            </div>
            <div className="section-block">
                <h6>Basic Table</h6>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>{/*//table-responsive*/}
                <h6>Striped Table</h6>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>{/*//table-responsive*/}
                <h6>Bordered Table</h6>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>{/*//table-responsive*/}
            </div>{/*//section-block*/}
        </section>{/*//doc-section*/}
        <section id="buttons-section" className="doc-section">
            <h2 className="section-title">Buttons</h2>
            <div className="section-block">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.
</p>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h6>Basic Buttons</h6>
                        <ul className="list list-unstyled">
                            <li><a href="#" className="btn btn-primary">Primary Button</a></li>
                            <li><a href="#" className="btn btn-green">Green Button</a></li>
                            <li><a href="#" className="btn btn-blue">Blue Button</a></li>
                            <li><a href="#" className="btn btn-orange">Orange Button</a></li>
                            <li><a href="#" className="btn btn-red">Red Button</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-12">
                        <h6>CTA Buttons</h6>
                        <ul className="list list-unstyled">
                            <li><a href="#" className="btn btn-primary btn-cta"><i className="fas fa-download" /> Download Now</a></li>
                            <li><a href="#" className="btn btn-green btn-cta"><i className="fas fa-code-branch" /> Fork Now</a></li>
                            <li><a href="#" className="btn btn-blue btn-cta"><i className="fas fa-play-circle" /> Find Out Now</a></li>
                            <li><a href="#" className="btn btn-orange btn-cta"><i className="fas fa-bug" /> Report Bugs</a></li>
                            <li><a href="#" className="btn btn-red btn-cta"><i className="fas fa-exclamation-circle" /> Submit Issues</a></li>
                        </ul>
                    </div>
                </div>{/*//row*/}
            </div>{/*//section-block*/}
        </section>{/*//doc-section*/}
        <section id="video-section" className="doc-section">
            <h2 className="section-title">Video</h2>
            <div className="section-block">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h6>Responsive Video 16:9</h6>
                        {/* 16:9 aspect ratio */}
                     
                    </div>
                    <div className="col-md-6 col-12">
                        <h6>Responsive Video 4:3</h6>
                        {/* 4:3 aspect ratio */}
                        <div className="embed-responsive embed-responsive-4by3">
                        </div>
                    </div>
                </div>{/*//row*/}
            </div>{/*//section-block*/}
            <section id="icons-section" className="doc-section">
                <h2 className="section-title">Icons</h2>
                <div className="section-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec imperdiet turpis. Curabitur aliquet pulvinar ultrices. Etiam at posuere leo. Proin ultrices ex et dapibus feugiat <a href="#">link example</a> aenean purus leo, faucibus at elit vel, aliquet scelerisque dui. Etiam quis elit euismod, imperdiet augue sit amet, imperdiet odio. Aenean sem erat, hendrerit  eu gravida id, dignissim ut ante. Nam consequat porttitor libero euismod congue.
</p>
                </div>{/*//section-block*/}
                <div className="section-block">
                    <h6>Elegant Icon Font</h6>
                    <a href="https://www.elegantthemes.com/blog/resources/elegant-icon-font" target="_blank"><img className="img-fluid" src="assets/images/demo/elegant-icon-font.jpg" alt="elegant icons" /></a>
                </div>{/*//section-block*/}
                <div className="section-block">
                    <h6>FontAwesome Icon Font</h6>
                    <a href="https://fortawesome.github.io/Font-Awesome/" target="_blank"><img className="img-fluid" src="assets/images/demo/fontawesome-icons.png" alt="fontawesome" /></a>
                </div>{/*//section-block*/}
            </section>{/*//doc-section*/}
        </section>{/*//doc-section*/}
    </div>
    )
}
