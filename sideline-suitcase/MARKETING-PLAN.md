# Sideline Suitcase: $0–$20/month Marketing Plan

The goal is to get cheer/sports moms to your **articles** (useful, trustworthy), and let the articles send the right people to your **referral page**. Don't spam the raw referral link anywhere. Pinterest and AI tools both reward helpful pages and punish link-dumping.

---

## ⚠️ Do these first (30 minutes)

1. **Read Chase's referral terms.** On your referral page, open the program terms and look for any limits on *where* you can share the link (some issuer programs restrict posting on public websites or social media). If public posting isn't allowed, keep the site and swap the button for "Message me for my link" or an email signup. The link lives in one file: `go/marriott/index.html`.
2. **FTC disclosure.** Already on every page. On Pinterest, add "#ad" or "referral link" in any pin description that mentions the card.
3. **Don't use Marriott/Chase logos or card images** unless you have permission. The site uses text names with ® only.

---

## Phase 1: Launch (Week 1)

| Task | Cost | Time |
|---|---|---|
| Buy a domain (e.g. `sidelinesuitcase.com` or your own name + "travels") | ~$12/yr | 10 min |
| Host free on **Cloudflare Pages** or **Netlify** (connect the GitHub repo, set build folder to `/`) | $0 | 20 min |
| Find & replace `https://sidelinesuitcase.com` with your real domain (sitemap, robots, llms.txt, page canonicals) | $0 | 5 min |
| **Google Search Console**: add site, submit `sitemap.xml` | $0 | 15 min |
| **Bing Webmaster Tools**: import from Search Console. Bing powers ChatGPT search and Copilot results | $0 | 5 min |
| Fill in `about.html` with your real story + a photo of you at a comp | $0 | 30 min |

## Phase 2: Pinterest (the main engine)

Pinterest is a search engine, and "cheer competition packing list," "cheer mom hacks," and "travel sports hotel tips" are exactly what moms search for there. Pins keep sending traffic for months, unlike Instagram/TikTok.

**Setup (one time)**
- Create a free **Pinterest Business** account. Claim your website (Settings → Claimed accounts). Rich Pins pick up the meta tags already on the site.
- Profile name with a keyword: `Kylee | Cheer Mom Travel Tips`.
- Create 5–7 boards, each with a keyword description:
  - Cheer Competition Packing Lists
  - Cheer Mom Hacks
  - Sports Mom Travel Tips
  - Hotel Points & Travel Hacks for Families
  - Competition Hair & Makeup
  - Road Trip Snacks for Sports Families
  - Cheer Mom Life (humor/relatable)

**Pins**
- Starter pins are in `pins/png/` (regenerate with `node pins/make-pins.js`). Better: make versions in **Canva free** with a real photo (bows, garment bag, hotel room, arena) — photos outperform plain text.
- Make **3–5 different pin designs per article** and post them over several weeks. Fresh images to the same URL is how Pinterest growth works.
- Pin title + description = keywords people type. Example:
  > **Cheer Competition Packing List (Printable)**
  > Everything to pack for cheer competition weekend: uniform bag, cheer hair and makeup kit, snacks, hotel essentials and sibling survival kit. Cheer mom tips from a mom who's done too many comps.
- Link pins to **your articles**, not to the Chase link. (Pinterest may restrict direct referral/affiliate-heavy pins; articles convert better anyway.)
- Cadence: **1–3 fresh pins per day**. Use Pinterest's free built-in scheduler; batch 2 hours on Sunday for the whole week.
- Save other people's good cheer content to your boards too (about 1 of theirs per 1 of yours early on) so boards look active.

**Free growth tricks**
- **Seasonality:** cheer comp season runs roughly Nov–Apr. Pinterest users plan 30–60 days ahead, so pin packing-list and hotel content in **Sept–Oct** and Nationals/Worlds travel content in **Feb–Mar**. (It's late Oct now — start immediately.)
- **Printable freebie:** turn the packing list into a 1-page PDF (Canva). "Free printable" pins get saved a lot.
- **Idea/video pins:** a 10-second clip of you packing the bow bag works great; record in the hotel room.

## Phase 3: Show up in AI answers (ChatGPT, Google AI Overviews, Perplexity, Claude)

AI assistants cite pages that (1) they can crawl, (2) answer a question directly, and (3) look trustworthy and are mentioned elsewhere. Already built in:

- `robots.txt` explicitly allows AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
- `llms.txt` gives AI tools a summary map of the site.
- Every article starts with a **"Short version"** answer box and ends with **FAQ** questions, plus FAQPage/Article schema. These are the snippets AI tools quote.
- Clear author identity (About page, byline) and honest disclosure.

What *you* need to do:
1. **Write answer-shaped articles.** Title = the question moms ask. Ideas:
   - "Do cheer parents have to stay at the team hotel?"
   - "Best hotels near [Dallas / Orlando / Atlanta / Indianapolis] cheer competitions"
   - "What to pack for Cheersport / Nationals / Worlds" (use generic event descriptions, avoid implying affiliation)
   - "How much does competitive cheer travel cost per year?" (use your real numbers; original data gets cited)
   - "Marriott Bold vs Boundless vs Bountiful for sports families" (keep terms dated; update when offers change)
2. **City pages are gold:** one page per competition city you've been to — parking, closest Marriott brands, where to eat near the venue, grocery store nearby. Real first-hand detail is hard for others to copy and AI tools love it.
3. **Get mentioned elsewhere** (AI tools trust sites others reference):
   - Answer questions on **Reddit** (r/Cheerleading, r/sportsparents, r/churning for points questions) genuinely; link only when it directly answers and the subreddit allows it.
   - Share helpful posts in your gym's parent Facebook group (ask the admin first).
   - Offer your packing list to your gym to share with new families.
4. **Update dates** on articles each season (the byline date + `dateModified` in the page's schema). Freshness matters for AI answers.
5. Test monthly: ask ChatGPT/Perplexity/Google "cheer competition packing list" or "stay to play hotel cheer" and see who's cited — copy what those pages do well.

## Phase 4: Turn readers into referrals (ethically)

- The card box appears at the middle of each article and on the dedicated `marriott-bonvoy-referral.html` page — that page is what you share when friends ask.
- Tell people honestly to compare your referral offer with the public offer and take the better one. That honesty builds the trust that makes people use your link.
- Track clicks: Cloudflare/Netlify analytics (free) shows visits to `/go/marriott/`.
- Referral cap is 200,000 points/year (5 approvals at 40k each), so this is about quality, not volume.

## Weekly routine (≈3 hours)

- **Sun (2 hrs):** make 7–15 pins in Canva, schedule them in Pinterest.
- **Mid-week (30 min):** draft or update one article (one new article every 1–2 weeks).
- **Comp weekend (15 min):** take photos/videos for pins (packing, hotel room, the arena — avoid other kids' faces).

## 90-day targets

| By | Goal |
|---|---|
| Day 30 | 8 articles live, 100+ pins, Search Console + Bing verified |
| Day 60 | 1–2 city guides, printable freebie, pin impressions climbing |
| Day 90 | First pins hitting 1k+ monthly impressions, first referral approvals |

Pinterest usually takes 2–4 months to ramp. Consistency wins.
