import { getYear } from "@/utils/helpers";

export default function Footer() {
  return (
    <footer className="mb-12">
      <small className="text-center block font-medium text-black">
        &copy; {getYear()} Quotes. All Rights Reserved
      </small>
    </footer>
  );
}
