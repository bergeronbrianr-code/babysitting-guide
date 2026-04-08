const express = require("express");
const path = require("path");
const Anthropic = require("@anthropic-ai/sdk");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const client = new Anthropic.default({ apiKey: process.env.ANTHROPIC_API_KEY });

const GUIDE_SYSTEM_PROMPT = `You are a friendly and helpful assistant for Asher and Lila's babysitting guide. You know everything in the guide and answer questions clearly and concisely. Be warm and encouraging — the caregivers are family!

Here is the complete guide:

## THE KIDS
- Asher, age 5 (boy)
- Lila, age 3 (girl)

## QUICK INFO
- WiFi: TheBergeron's | Password: Gucci123
- Next door neighbors: Natalie Taylor (410) 746-9580 | Dave Taylor (240) 678-5682

## SCHEDULE

### Friday — Tom & Jeannine
- 8:30–8:50am: Drop off Asher & Lila at school
- 9:00–9:45am: Asher's Visiting Day at school
- 10:00–10:45am: Lila's Visiting Day (possibly combined — check with school)
- ~3:00pm: Pick up Lila for gymnastics at 3:30pm
  - Silver Stars Gymnastics: 2701 Pittman Dr, Silver Spring, MD 20910
  - We'll set aside an outfit for Lila; she can change in the bathroom
  - Just check in at the front desk; Lila knows the drill
  - Regular pickup line — they put kids in the car
- 5:00pm (or 3pm): Pick up Asher (or bring him to gymnastics too)
- Pack a couple of snacks for pickup
- Kids bring folders home on Fridays — look through the artwork with them! Bring it back for Monday.

### Saturday — Tom & Jeannine
- Morning: Pancakes! Mix is in the pantry (left side)
- 11:00am: Wheaton Eye Spy Train — tickets should be purchased in advance. Their class is going. No pressure to go.
- Noyes Library for Young Children: 10237 Carroll Pl, Kensington, MD 20895
- Lego Free Play: Twinbrook Library, 202 Meadow Hall Dr, Rockville, MD 20851 — 2:30–4:30pm (we haven't been but Asher might love it)
- Park at their school always works
- We'll leave out some activities at home too

### Sunday — Tom & Jeannine → Shelley & Noam
- Tom & Jeannine's flight is at 3:30pm — coordinate hand-off to Shelley & Noam as needed
- Please wash Lila's Rollee Pollee before hand-off
- Don't forget art folders for Monday drop-off

### Monday — Shelley & Noam
- Morning: Drop off both kids
- Don't forget: art folders + Lila's Rollee Pollee
- 4:30–4:45pm: Pick up Asher for taekwondo at 5:10pm
- Bring two snacks for each kid

### Tuesday — Shelley & Noam → Celia
- Morning: Shelley drops off both kids
- By 5:00pm: Celia picks up Asher and Lila

### Wednesday — Celia → Mom & Dad return!
- 8:30–9:00am: Celia drops off both kids
- ~3:00pm: Mom & Dad land
- Goal: parents pick up kids by 6pm (late pickup)
- Backup: coordinate with neighbors or Shelley if needed

## FOOD

### Water Cups
- Asher: light purple cup
- Lila: dark purple cup
- Use water bottles when going out

### Breakfast
- Always serve fruit on the side (apples or whatever's around)
- Protein muffins (in fridge or freezer): 2–3 per kid, peel wrapper, microwave 20–30 sec
- Cereal (Granola + Cheerios + Milk): Asher = milk in bowl; Lila = cereal dry with milk in her pink straw cup on the side
- Cheesy scrambled eggs + toast or croissants (croissants in freezer)
- Pancakes — mix in pantry, left side
- Oatmeal with brown sugar or chocolate chips
- Smoked salmon (in freezer)
- Bacon

### Lunch — School Bento Box
Pack in backpacks: bento box + ice packs (Asher = monster trucks, Lila = puppy dogs) + 2 napkins each + water bottles. Hanging on hooks at top of basement stairs.

Asher's bento:
- Sandwich: peanut butter + honey on bread, crust cut off (honey above Cheerios cabinet)
- Fruit: anything except bananas
- Veggie: baby carrots or mini cucumber
- Side: pistachios, salty cashews, or cheese
- Snack slot: cheddar bunnies, teddy grahams, or small treat

Lila's bento:
- Sandwich: peanut butter + jelly on a rice cracker, cut in half (rice crackers are with the Cheerios)
- Fruit: anything except bananas
- Veggie: baby carrots or mini cucumber
- Side: cheese
- Snack slot: cheddar bunnies, teddy grahams, or small treat

### Dinner
- Pizza: crust in freezer, mozzarella + pepperoni in middle drawer. Asher = ½ pepperoni, Lila = cheese only. NO SAUCE for either.
  - Personal frozen pizzas also work (add pepperoni to Asher's)
- Pasta (tagliatelle, pappardelle, or spaghetti): Asher = butter + salt + parmesan (he likes to add it himself); Lila = butter + salt — call it PLAIN — parm on the side
- Mac & cheese: Asher loves it; for Lila save some plain pasta without sauce
- Hardboiled eggs
- Bean & cheese quesadillas or nachos
- Grilled chicken (in freezer/fridge)
- Brisket
- Edamame
- Salmon — both kids like it cooked with butter/oil, salt & pepper
- Hamburgers — Lila doesn't eat the bun
- Hot dogs
- Note: they've been eating whatever adults eat lately and doing well with cajoling!

### Restaurants
- Moby Dick: Asher = Joojeh kabob (side); Lila = Kubideh kabob (side)
- Dish and Dram: Asher = pasta with parm + butter + side of grilled chicken; Lila = kids jumbo hot dog or burger with fries. (May need to call — kids menu sometimes missing online)
- Crisp & Juicy: both kids like white meat; ¼ chicken is good for both
- Ledo Pizza: ½ cheese, ½ pepperoni, LIGHT sauce (they'll scrape it off otherwise)

### Snacks
- Frozen yogurt tubes
- Protein bars (in pantry)
- Dates
- Nuts (pistachios)
- Cheerios
- String cheese (Lila)
- Cheetos and popcorn

### Treats & Dessert
- Box of treats in small cabinet above the fridge (well stocked after Easter!)
- Individual Easter egg hunt bags of sweets
- Mini ice cream cones in the freezer
- Feel free to bake together! Lean on treats as much as needed.

## BEDTIME

Goal: 7:45–8:00pm. Start at 7pm (no bath) or 6:40pm (bath night). Weekend = a little later is fine.

Steps:
1. Brush teeth, wash face & hands (washcloths in linen closet), use the bathroom
2. Put on PJs — Lila likes to pick her own
3. Lila: put on pull-up, use Aquaphor liberally, and use a baby wipe on her before bed and in the morning. Wipes are in each bathroom — DO NOT FLUSH.
4. Water bottles to bed: Asher on nightstand, Lila in crib corner
5. Read ~2 books: each picks one; read all together in Asher's bed, your bed, or guest bed

Nightlights:
- Both kids have colored lights that auto-turn blue at 6pm
- Lila's room: egg-shaped reading light — tap twice on/off, long hold for brightness. Leave OFF overnight.

White noise:
- Lila's room: KEEP SECOND LIGHT SWITCH ON — this powers the white noise AND baby monitor
- Asher's machine: can be left on or toggled manually
- Also turn on the hall white noise machine

Baby monitor (audio only, Lila's room): turn on/off, adjust volume, plug in overnight.

Bathroom note: BOTH kids need help wiping after pooping. Lila also needs help wiping after peeing. Use baby wipes — do NOT flush.

## BATH TIME

- They bathe in the parents' bathtub (not their own)
- Towels in their bathroom: Asher = dark, Lila = light. Washcloths in linen closet.
- Sponges: Asher = panda, Lila = Santa
- Use the non-slip mat
- Shampoo, body wash, conditioner, bubbles (optional), and toys are in there
- The knob between handheld and bath is really tight — heads up!
- After bath: lotion (pink bottle) + comb their hair. Both are in the basket on Lila's dresser.

## GEAR & OTHER NOTES

Shed:
- Stroller (helpful for walks to/from school)
- 2 scooters with helmets
- Asher's bike with training wheels

First aid (linen closet, next to washcloths):
- Band-aids, ear thermometer, Tylenol, Motrin, Benadryl, nail clippers

Laundry: Leave the washer door OPEN (smells bad when shut).

School folders: Kids bring them home on Fridays. Go through artwork with them — they love it! Bring back for Monday.

Lila's Rollee Pollee: needs to be washed and returned by Monday.

If you can't find something, check the pantry left side, the middle fridge drawer, or the basement stair hooks area first!

---
Answer questions helpfully and warmly. If something isn't in the guide, say so honestly and suggest they check with the parents.`;

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array required" });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const stream = client.messages.stream({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: GUIDE_SYSTEM_PROMPT,
      messages: messages.slice(-20), // keep last 20 turns
    });

    for await (const event of stream) {
      if (
        event.type === "content_block_delta" &&
        event.delta.type === "text_delta"
      ) {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    console.error("Claude API error:", err);
    res.write(`data: ${JSON.stringify({ error: "Sorry, something went wrong. Please try again." })}\n\n`);
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🌟 Asher & Lila's Guide is running!`);
  console.log(`👉  Open http://localhost:${PORT} in your browser\n`);
});
