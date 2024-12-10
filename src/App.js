import React from 'react';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Heading } from "./components/Heading";
import { Tooltip } from "./components/Tooltip";
import { Accordion } from "./components/Accordion";

function App() {
  return (
    <div id="trueRoot">
      <Button variant="primary" size="lg">lg, primary</Button>
      <Button variant="primary">md, primary</Button>
      <Button variant="primary" size="sm">sm, primary</Button>
      <Button variant="bordered" size="lg">lg, bordered</Button>
      <Button variant="bordered">md, bordered</Button>
      <Button variant="bordered" size="sm">sm, bordered</Button>

      <Input type="text" placeholder="Enter text" value="" onChange="" disabled="" label="Name" danger=""/>
      <Input type="email" placeholder="Enter email" value="" onChange="" disabled="" label="Email" danger="" />
      <Input danger placeholder="Danger" value="" onChange="" disabled="" label="Dangerous" />

      <Typography textSize="sm" className="">
        SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
      <Typography textSize="md" className="">
        MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
      <Typography textSize="lg" className="">
        LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>

      <Heading level="1" className="">Heading 1</Heading>
      <Heading level="2" className="">Heading 2</Heading>
      <Heading level="3" className="">Heading 3</Heading>
      <Heading level="4" className="">Heading 4</Heading>
      <Heading level="5" className="">Heading 5</Heading>
      <Heading level="6" className="">Heading 6</Heading>

      <Tooltip text="I am a tooltip" position="top"></Tooltip>
      <Tooltip text="I am a tooltip" position="left"></Tooltip>
      <Tooltip text="I am a tooltip" position="right"></Tooltip>
      <Tooltip text="I am a tooltip" position="bottom"></Tooltip>

      <Accordion title="Accordion 1" defaultOpen="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
      <Accordion title="Accordion 2" defaultOpen="false">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
    </div>
  );
}

export default App;
