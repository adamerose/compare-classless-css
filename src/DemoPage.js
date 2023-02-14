import React, { useState } from "react";

const Demo = () => {
  return (
    <>
      <section id="forms">
        <h1>Forms</h1>
        <form>
          <fieldset>
            <legend>Legend</legend>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>

            <div>
              <label htmlFor="gender">Dropdown</label>
              <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label>Radio Buttons</label>
              <div><label><input name="abc" id="1" type="radio" /> Label 1</label></div>
              <div><label><input name="abc" id="2" type="radio" /> Label 2</label></div>
              <div><label><input name="abc" id="3" type="radio" /> Label 3</label></div>
            </div>
            <div>
              <label htmlFor="url">URL Input</label>
              <input type="url" placeholder="http://mrmrs.cc" />
            </div>
            <div>
              <label>Text area</label>
              <textarea defaultValue={""} />
            </div>
            <div>
              <label><input type="checkbox" /> This is a checkbox.</label>
            </div>
            <div>
              <input type="submit" defaultValue="Submit" />
            </div>
          </fieldset>
        </form>
      </section>

      <hr />

      <section id="text">
        <h1>Text</h1>
        <a href=""><p>Sample text link</p></a>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
        <h1>h1 Lorem Ipsum</h1>
        <h2>h2 Lorem Ipsum</h2>
        <h3>h3 Lorem Ipsum</h3>
        <h4>h4 Lorem Ipsum</h4>
        <h5>h5 Lorem Ipsum</h5>
        <h6>h6 Lorem Ipsum</h6>
        <p>p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <small>This is for things like copyright info</small>
        <s>Content that isn't accurate or relevant anymore.</s>
        <span>Generic span wrapper</span>
        <p>This is inline text with <sub>subscript</sub> and <sup>superscript</sup> elements.</p>
        <p>
          <var>f</var>(<var>x</var>) = <var>a</var><sub>0</sub> + <var>a</var><sub>1</sub><var>x</var> +
          <var>a</var><sub>2</sub><var>x</var><sup>2</sup>, where <var>a</var><sup>2</sup> ≠ 0
        </p>
      </section>

      <section>
        <figure>
          <img src="http://placekitten.com/g/960/320" alt="Figure Example" />
          <figcaption>
            Photo of the sky at night. Original by <a href="http://flickr.com/photos/heyitsadam/">@mrmrs</a>
          </figcaption>
        </figure>
      </section>
      <section>
        {/*
      http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-samp-element
      */}
        <samp>
          <pre>{"          "}/Sites/html master{"  "}☠ ☢{"\n"}{"            "}${"  "}<kbd>ls -gto</kbd>{"\n"}{"            "}total 104{"\n"}{"            "}-rw-r--r--{"   "}1{"   "}10779 Jun{"  "}5 16:24 index.html{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}1255 Jun{"  "}5 16:00 _config.yml{"\n"}{"            "}drwxr-xr-x{"  "}11{"     "}374 Jun{"  "}5 15:57 _site{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}1597 Jun{"  "}5 14:16 README.md{"\n"}{"            "}drwxr-xr-x{"   "}5{"     "}170 Jun{"  "}5 14:15 _sass{"\n"}{"            "}-rw-r--r--{"   "}1{"     "}564 Jun{"  "}4 15:59 Rakefile{"\n"}{"            "}drwxr-xr-x{"   "}6{"     "}204 Jun{"  "}4 15:59 _includes{"\n"}{"            "}drwxr-xr-x{"   "}4{"     "}136 Jun{"  "}4 15:59 _layouts{"\n"}{"            "}drwxr-xr-x{"   "}3{"     "}102 Jun{"  "}4 15:59 _resources{"\n"}{"            "}drwxr-xr-x{"   "}3{"     "}102 Jun{"  "}4 15:59 css{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}1977 Jun{"  "}4 15:59 favicon.icns{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}6518 Jun{"  "}4 15:59 favicon.ico{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}1250 Jun{"  "}4 15:59 touch-icon-ipad-precomposed.png{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}2203 Jun{"  "}4 15:59 touch-icon-ipad-retina-precomposed.png{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}1046 Jun{"  "}4 15:59 touch-icon-iphone-precomposed.png{"\n"}{"            "}-rw-r--r--{"   "}1{"    "}1779 Jun{"  "}4 15:59 touch-icon-iphone-retina-precomposed.png{"\n"}{"          "}</pre>
        </samp>
      </section>
      <section>

        <table>
          <caption>This is a caption for a table</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Address</th>
            </tr>
          </thead>
          <tfoot />
          <tbody>
            <tr>
              <td>#999-32ac</td>
              <td>First Name</td>
              <td>13 May, 2013</td>
              <td>999 Spruce Lane, Somewhere, CA 94101</td>
            </tr>
            <tr>
              <td>#888-32dd</td>
              <td>Sample Name</td>
              <td>17 May, 1984</td>
              <td>999 Spruce Lane, Somewhere, CA 94101</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section id="article">
        <h1>An Example Article</h1>
        <article>
          <p className="test-class">
            Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud <em>exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat</em>. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <blockquote>
            <p className="test-class">
              This is a GREAT pull quote.
            </p>
            <a href="#">- Author</a>
          </blockquote>
          <p className="test-class">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
            qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
            qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>
          <p className="test-class">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </article>
      </section>

      <section>
        <footer>
          <small>© 2014 Some company name</small>
          <address>email@email.com</address>
        </footer>
      </section>
    </>
  );
};

export default Demo;
