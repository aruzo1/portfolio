import Link from "next/link";
import Fade from "components/animations/Fade";
import { Highlight, Text } from "components/shared/Typography.style";
import { Button } from "components/shared/Button.style";
import { ContactStyled, ContactTitle } from "./style";

const email = "aruzo@aruzo.it";

function Contact() {
  return (
    <Fade>
      <ContactStyled id="contact">
        <ContactTitle>
          Contact <Highlight>Me</Highlight>
        </ContactTitle>
        <Text>
          Although I&rsquo;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&rsquo;ll try my best to get back to you!
        </Text>
        <Link href={"mailto:" + email}>
          <Button variant="primary">{email}</Button>
        </Link>
      </ContactStyled>
    </Fade>
  );
}

export default Contact;
