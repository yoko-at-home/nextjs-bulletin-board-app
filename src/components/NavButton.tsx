import { Button } from "@mantine/core";
import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const NavButton: FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <Button variant="outline" color="gray" size="xs" uppercase>
        {props.children}
      </Button>
    </Link>
  );
};

export default NavButton;
