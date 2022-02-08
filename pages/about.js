import ImageCard from "../components/molecule/ImageCard";

export default function About() {
  return (
    <>
      <h1 className="text-2xl py-2 text-gray-700">About</h1>
      <h2 className="text-xl pt-2 text-gray-700">Myself</h2>
      <ImageCard header="Thomas" paragraph="Hello world! I'm a React web developer" image="images/Profile.png"></ImageCard>
      <h2 className="text-xl pt-2 text-gray-700">Our Pets</h2>
      <ImageCard header="Mabel" paragraph="Our charming cat Mabel comes from Halifax found on the side of the road. The first in the family at 4 years old" image="images/Mabel.png"></ImageCard>
      <ImageCard header="Lou" paragraph="The mischevious Lou was found in the Jock river just outside of Ottawa. Last to join at 6 months old" image="images/Lou.png"></ImageCard>
      <ImageCard header="Stout" paragraph="Stout the bulldozer come from the humane socienty. Second oldest at 3 years old" image="images/Stout.png"></ImageCard>
    </>
  );
}
