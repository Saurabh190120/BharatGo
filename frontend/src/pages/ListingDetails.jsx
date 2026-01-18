import BookingForm from "../components/traveller/BookingForm";

export default function ListingDetails() {
  const listingId = 12;

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        {/* Listing info */}
      </div>

      <BookingForm listingId={listingId} />
    </div>
  );
}
