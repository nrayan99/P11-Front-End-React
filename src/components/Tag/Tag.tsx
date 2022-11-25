import style from "./Tag.module.scss";
type Props = {
  tag_name: string;
};

function Tag({ tag_name } : Props) {
  return (
    <div className={style.Tag}>
        {tag_name}
    </div>
  );
}

export default Tag;