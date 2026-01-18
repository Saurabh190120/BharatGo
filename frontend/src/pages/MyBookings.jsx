

export default function MyBookings() {
  const bookings = [
    {
      id: 1,
      title: "Luxury Dubai Escape",
      location: "Dubai, UAE",
      date: "12 Feb 2026 - 19 Feb 2026",
      status: "Confirmed",
      price: "$1200",
      image:
        "https://images.unsplash.com/photo-1504214208698-ea1916a2195a",
    },
    {
      id: 2,
      title: "Romantic Paris Getaway",
      location: "Paris, France",
      date: "5 Mar 2026 - 10 Mar 2026",
      status: "Pending",
      price: "$950",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
  ];

  return (
    <>

      <div className="min-h-screen bg-softbg px-10 py-10">
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="bg-white p-10 rounded-xl text-center shadow">
            <p className="text-gray-500">You have no bookings yet.</p>
          </div>
        )}

        {/* Booking Cards */}
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow flex gap-6 overflow-hidden"
            >
              {/* Image */}
              <img
                src={booking.image}
                alt={booking.title}
                className="w-56 h-40 object-cover"
              />

              {/* Details */}
              <div className="flex-1 p-4 space-y-2">
                <h2 className="text-xl font-semibold">
                  {booking.title}
                </h2>
                <p className="text-gray-500">{booking.location}</p>
                <p className="text-sm text-gray-600">
                  📅 {booking.date}
                </p>
                <p className="font-medium">{booking.price}</p>

                {/* Status */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              {/* Actions */}
              <div className="p-4 flex flex-col justify-center gap-3">
                <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
                  View Details
                </button>
                <button className="text-red-500 hover:underline text-sm">
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
