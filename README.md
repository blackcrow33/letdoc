# Convert markdown file to html

Technical documentation should be easily ready by a user. Layouting the content of a document takes lots of time in Windows Word. Especially, Technical document, the coding block is hard to read. Markdown has been widely adopted for the documnetation but it needs a massage in order to present to your client. As the result, HTML should be a good option as a output format of a document. Different format of document can be generated by browser. Printing as PDF or saving the whole page into image file.

This simple project is designed to work with `Mermaid` and `Chartjs`. If the markdown can express a diagram in words and or using Javascript code to generate a chart will be helpful to me for writing a document to a client.

## Install

```shell
npm install -g asqi-md2html
```

## Usage

```shell
md2html example.md
# or
md2html example.md myexample.html
```

An example content in `example.md`

```md
[comment]: # (title : <Your Project Title>)
[comment]: # (author: <Your Author Version>)
[comment]: # (version: <Your Document Version>)

# My Project Title

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi mauris, mollis in leo ut, congue vulputate enim. Nulla interdum posuere orci in volutpat. Nulla fringilla erat leo, id sollicitudin velit sollicitudin non. Mauris condimentum nisi id lorem dignissim interdum. Curabitur lacinia vestibulum pharetra. Mauris at nisi eu nibh aliquet elementum et in lectus. Nunc viverra consectetur purus, sit amet fringilla est porta ut. Nam sem risus, rutrum ut pharetra eu, ornare non metus. Phasellus quis sodales metus. Nunc ornare vestibulum lectus, sed malesuada dui faucibus quis. Donec vulputate nibh a tortor pellentesque consequat. Vivamus faucibus nulla id varius imperdiet.

```

Dependencies

```shell
npm install
```

