function DeliveryAnimation() {
  return (
    <div className="delivery-wrapper">
      {/* center parcel */}
      <div className="parcel">📦</div>

      {/* rotating ring */}
      <div className="orbit">
        <div className="vehicle bike">🏍️</div>
        <div className="vehicle car">🚗</div>
      </div>
    </div>
  );
}

export default DeliveryAnimation;
