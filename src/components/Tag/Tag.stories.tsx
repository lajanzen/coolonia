import Tag from "./Tag";

export default {
  title: "Component/Tag",
  component: Tag,
};

export const Today = (): JSX.Element => <Tag tagName="heute" value="today" />;
export const Monday = (): JSX.Element => <Tag tagName="Mo" value="day1" />;
export const Tuesday = (): JSX.Element => <Tag tagName="Di" value="day2" />;
