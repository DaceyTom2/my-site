export default function ImageCard(props) {
  return (
    <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
      <img
        class="object-cover w-full h-96 rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.image}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.header}
        </h3>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}
