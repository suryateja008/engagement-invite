// ========================================
// ENGAGEMENT INVITATION - CONFIGURATION
// ========================================
// Edit the values below to customize your invitation

const EVENT_CONFIG = {
  // ═══════════════════════════════════════
  // COUPLE INFORMATION
  // ═══════════════════════════════════════
  partner1Name: "Surya Teja Duggi",
  partner2Name: "Nityasri Lakshmi Gopinath",
  
  // ═══════════════════════════════════════
  // EVENT DETAILS
  // ═══════════════════════════════════════
  eventType: "Engagement Ceremony",
  eventDate: "Sunday, March 8, 2026",
  eventTime: "11:00 AM",
  rsvpDeadline: "February 28, 2026",
  
  // ═══════════════════════════════════════
  // VENUE INFORMATION
  // ═══════════════════════════════════════
  venueName: "Cresta Blanca Ballroom",
  venueAddress: "Robert Livermore Community Center",
  venueStreet: "4444 East Ave",
  venueCity: "Livermore",
  venueState: "CA",
  venueZip: "94550",
  
  // Google Maps Link - Replace with your actual venue link
  mapLink: "https://www.google.com/maps/place/Robert+Livermore+Community+Center/@37.6818,-121.7441,17z",
  
  // Google Maps Embed URL (optional) - Get this from Google Maps > Share > Embed
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.8!2d-121.7441!3d37.6818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQwJzU0LjUiTiAxMjHCsDQ0JzM4LjgiVw!5e0!3m2!1sen!2sus!4v1234567890",
  
  // ═══════════════════════════════════════
  // ADDITIONAL DETAILS
  // ═══════════════════════════════════════
  dressCode: "Traditional / Formal Attire",
  parkingInfo: "Free parking available on-site",
  
  // ═══════════════════════════════════════
  // CONTACT INFORMATION
  // ═══════════════════════════════════════
  contactEmail: "your-email@example.com",
  contactPhone: "(XXX) XXX-XXXX",
  contactName: "Your Name",
  
  // ═══════════════════════════════════════
  // INVITATION MESSAGE
  // ═══════════════════════════════════════
  welcomeMessage: "We cordially invite you & your family to attend the",
  closingMessage: "Your presence would make our special day even more memorable.",
  
  // ═══════════════════════════════════════
  // SOCIAL / WEBSITE LINKS (optional)
  // ═══════════════════════════════════════
  websiteUrl: "",
  instagramHandle: "",
  
  // ═══════════════════════════════════════
  // ADDITIONAL EVENTS (optional)
  // ═══════════════════════════════════════
  additionalEvents: [
    // Uncomment and add more events if needed:
    // {
    //   name: "Reception",
    //   date: "March 8, 2026",
    //   time: "6:00 PM",
    //   venue: "Same Venue"
    // }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EVENT_CONFIG;
}
