import ImageCard from "../components/molecule/ImageCard";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl p-2 text-gray-700" >About</h1>
      <h2>Myself</h2>
      <ImageCard header="Thomas" paragraph="test" image="images/TLogo.png"></ImageCard>
      <h2>Pets</h2>
      <ImageCard header="Mabel" paragraph="test" image="images/Mabel.png"></ImageCard>
      <ImageCard header="Lou" paragraph="test" image="images/Lou.png"></ImageCard>
      <ImageCard header="Stout" paragraph="test" image="images/Stout.png"></ImageCard>
    </div>
  );
}
