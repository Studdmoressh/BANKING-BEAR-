import CommentBox from "../components/CommentBox";
import FileUpload from "../components/FileUpload";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-brandGold">Dashboard</h1>
      <p className="mb-4 text-gray-400">Manage your crypto assets in real time</p>
      <CommentBox />
      <FileUpload />
    </div>
  );
}
