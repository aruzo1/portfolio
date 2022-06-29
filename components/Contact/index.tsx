import Link from "next/link";
import { Highlight, Text } from "components/shared/Typography.style";
import { ContactStyled, ContactTitle } from "./style";
import { Button } from "components/shared/Button.style";

const email = "Dawid12391111@gmail.com";

function Contact() {
  return (
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
  );
}

export default Contact;
