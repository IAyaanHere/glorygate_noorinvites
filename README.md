# Eden Project README

This is the custom localized version of the Eden botanical wedding invitation template.

## Changes Made:
- **Asset Recovery**: Fully localized all assets, including Google Fonts (`.woff2` files) converted to local references.
- **UI Cleanup**: Removed "Demo Version" badge, "Create Yours" preview CTA, and its corresponding popup modal logic to ensure a clean UI.
- **Customization**:
  - Groom: Shaikh Zaid (Parents: Shaikh Tariq & Shabana Begum).
  - Bride: Zoya Khan (Parents: Rashid Khan & Farida Begum).
  - Short names logic applied: Displays "Zoya & Zaid" in the closing label while retaining full names where appropriate.
  - Venue updated to "Noor Invites" (Mahal, Nagpur).
- **Audio Improvements**:
  - Uses a custom local background track: `bismillah.mp3`.
  - Added a fix forcing the intro video to be fully muted via JS (`video.muted = true; video.volume = 0;`) before playing, which prevents background overlap issues on mobile devices.
