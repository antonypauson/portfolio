export default function Subheading() {
    return (
      <div className="md:ml-13 flex gap-4">
        <h4 className="text-lg md:text-3xl font-extralight tracking-tighter lowercaseI hover:font-extrabold hover:text-white duration-200">
          Programming
        </h4>
        <h4 className="text-lg md:text-3xl font-extralight tracking-tighter lowercaseI hover:font-extrabold hover:text-white">
          Writing
        </h4>
        <h4 className="text-lg md:text-3xl font-extralight tracking-tighter lowercaseI hover:font-extrabold hover:text-white">
          Reading
        </h4>
      </div>
    );
}