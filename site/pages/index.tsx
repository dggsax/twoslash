import Head from "next/head";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <article className="container border-red">
          <div className="intro">
            <p>
              The documentation concerning
              <br />
              the npm modules of
            </p>
            <h1 className="title">Shiki-Twoslash</h1>
            <p>
              In which markdown code samples are powered by
              <br />
              the syntax engine of Visual Studio Code
              <br />
              mixed with the TypeScript compiler’s information.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
            <img src={"./svgs/squiggle.svg"} alt="Decoration" width={70} height={25.5} />
          </div>

          <div className="intro">
            <p className="by">By orta therox</p>
            <p>
              Purveyor of renound open source code
              <br />
              and TypeScript compiler team member
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <img src="./svgs/logo.svg" alt="Shiki Logo" width={167} height={238} />
          </div>
        </article>

        <article className="container border-yellow" id="shiki">
          <div style={{ textAlign: "center" }}>
            <img src="./svgs/shiki.svg" alt="The word 'shiki'" width={309} height={95} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1">
              <p>
                <span className="eu">V</span>isual Studio Code’s syntax highlighter packaged for running in a web browser and statically via Node.js.
              </p>
              <p>
                Supports all possible languages available on the VS Code extension marketplace. That’s over 200 langauges. All you need is a{" "}
                <code>.tmlangauge</code> file for anything not shipped with Shiki.
              </p>
              <p>Shiki colours your code with any VS Code theme. That’s 4000+ last time we checked.</p>
            </div>

            <div className="left-margin-1">
              <p>Fig 1.</p>
              <p className="center-small">
                <img src="./svgs/fig-1-code.svg" alt="The word 'shiki'" width="246" height="284" />
              </p>
            </div>
          </div>
        </article>

        <article className="container border-blue" id="twoslash">
          <div style={{ textAlign: "center" }}>
            <img src="./svgs/twoslash.svg" alt="The word 'twoslash'" width={501} height={92} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1">
              <p>
                <span className="eu">T</span>Think of twoslash as a pre-processor for your code-samples.
              </p>
              <p>Twoslash is a JavaScript and TypeScript markup language. You can write a single code sample which describes an entire JavaScript project</p>
              <p>Twoslash uses the same compiler APIs as your text editors to provide type-driven hover information, accurate errors and</p>
              <p>
                Each code sample is compiled in isolation, so you can be certain all your examples still compile and work right a few major versions down the
                line.
              </p>
            </div>

            <div className="left-margin-1">
              <p>Fig 2.</p>
              <p className="center-small">
                <img src="./svgs/fig-2-code.svg" alt="The word 'shiki'" width="331" height="270" />
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

// Grabs the code samples
export async function getStaticProps() {
  const fs = require("fs");
  const file = fs.readFileSync("examples/thing.html", "utf8");

  return {
    props: {
      file
    }
  };
}
