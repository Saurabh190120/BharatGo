{buses.map(bus => (
  <BusCard
    key={bus.id}
    bus={bus}
    onSelect={() => navigate(`/seats/${bus.id}`)}
  />
))}
