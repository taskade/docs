---
description: >-
  Understand how Taskade AI credits work, what drives app costs, credit pack pricing, and Auto Top-Up that refills your balance before agents run dry.
---

# Credits & Billing

***

## How AI Credits Work

Each AI request in Taskade uses credits. An AI request can be a prompt to an agent, an AI step in an automation, or the build of a Taskade Genesis app. The credit cost depends on the model:

* **Lightweight models** cost fewer credits for each request.
* **Frontier models** (the models with the deepest reasoning) cost more.
* **Auto mode** picks a model for each request, so you do not pick a model for each task. Auto is the default.

***

## Free Credits

A Free workspace starts with 0 AI credits. On Free, you earn free AI credits with referrals and invites, and you can upgrade any time.

* **Referrals:** You earn credits when a person signs up for Taskade through your referral link and verifies their email, up to a limit. Your link is in [Settings → Earn credits](https://www.taskade.com/settings/credits).
* **Paid plans:** Each paid plan includes a monthly AI credit allowance. See the [plan table](README.md#current-plans).

{% hint style="info" %}
The current plans are on the [pricing page](https://www.taskade.com/pricing).
{% endhint %}

***

## Paid Plan Credits

Paid plans include Monthly Credits. Monthly Credits reset on each billing cycle.

| Plan tier  | Monthly credits                                            | Key benefit                   |
| ---------- | ---------------------------------------------------------- | ----------------------------- |
| Starter    | 10,000                                                     | Individuals and small teams (up to 3 members) |
| Pro        | 50,000                                                     | Personal productivity         |
| Business   | 150,000                                                    | Team use, complex AI tasks    |
| Max        | 400,000                                                    | Heavy generation, large teams |
| Enterprise | 1,100,000                                                  | Organization-wide deployments |

{% hint style="info" %}
The credit amounts for each tier can change. The [pricing page](https://www.taskade.com/pricing) shows the current amounts.
{% endhint %}

Max and Enterprise plans have credit limits for large bursts of work. Taskade does not stop these plans in the middle of a large build.

***

## What Your App Will Cost

If you build and operate an app on Taskade Genesis, the important question is which parts of the app use credits. The second question is how that use grows with your app. Use this section to decide on a plan. For the current cost of each request, look at the model picker in the app. Published numbers change when models and prices change.

### What uses your credits

| What uses credits                    | What changes the cost                                                                                                |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **Taskade Genesis app builds and edits** | The largest cost comes at the start, while you build. Each build and each "edit with AI" pass uses credits. The cost decreases when the app is stable. |
| **AI automation steps**              | The cost grows with the number of runs and the number of AI steps in each run. A trigger that fires all day costs more than a trigger that fires once a week. |
| **An agent that answers your app users** | The cost grows with the number of people who use your published app and the length of each chat. This cost grows as your app gets more traffic. |
| **Agent and Taskade EVE chat**       | The cost grows with the AI help that you and your team use each day: drafts, summaries, and questions in your workspace. |

Steps that do not call AI use no credits. Examples are plain forms, stored data, and automation actions with no AI.

### Pick the right plan

* **Low use:** You build for yourself or a small team. Traffic is light and automations run once in a while. A personal paid tier, such as Pro, is usually enough. Buy a credit pack for a large build.
* **Medium use:** A team relies on the app, automations run regularly, and some app users talk to your agent each day. The Business tier is a good fit.
* **High use:** A public app has steady traffic, an agent answers many app users, and automations run all day. Max or Enterprise is a good fit. These plans have limits for large bursts of AI work.

Do not buy too much on the first day. Watch your [usage page](credits-and-billing.md#viewing-your-usage) for one month. Then pick the plan that matches the credits that your app uses.

### Keep your app running

If customers use your published app, an agent with no credits stops in the middle of a chat. Turn on [**Auto Top-Up**](credits-and-billing.md#auto-top-up) to refill your balance before it gets to zero. Then your agent continues to answer your customers.

***

## Credit Packs

A credit pack is a one-time purchase. It adds credits to your monthly allowance.

* **Prices by volume:** A larger pack gives a larger bonus.
* **No expiry:** Purchased credits do not expire. Taskade uses your Monthly Credits first, then these Extra Credits.
* **Audit record:** Each purchase shows in the workspace activity log.

<figure><img src="../.gitbook/assets/earn-credits.gif" alt="" width="563"><figcaption></figcaption></figure>

A pack is useful for a month with a lot of AI work, for example a product launch, a large content project, or a large Taskade Genesis app build.

***

## Auto Top-Up

Auto Top-Up buys credits for you before your balance runs out in the middle of a workflow.

### How It Works

1. Set a **balance threshold**. The default is 9,000 credits.
2. Set a **top-up amount** in dollars. The default is $20.
3. Taskade buys a credit pack with your saved card when your balance drops below the threshold. It also buys a pack when the balance is too low for the next AI step.

### Turn On Auto Top-Up

1. Open [Settings → Credits](https://www.taskade.com/settings/usage) in a web browser.
2. Find the **Auto-reload** row on the **Credits** card.
3. Turn on the switch.
4. To change the amounts, click **Manage**, then **Change settings**.
5. Pick the **Top up amount** and the **When credit balance drops below** value.
6. Click **Save changes**.

<figure><img src="../.gitbook/assets/auto-credit-top-up.gif" alt="" width="563"><figcaption></figcaption></figure>

{% hint style="warning" %}
Set a threshold and a top-up amount that match your usual use. Auto Top-Up charges your card each time it buys a pack.
{% endhint %}

Auto Top-Up is available on every paid plan. The mobile apps and the app-store desktop apps do not show this control.

***

## Model-Specific Pricing

Each AI model has its own credit cost for each request. Taskade changes these prices from time to time to match the costs of the providers.

* The model picker shows the current credit cost of each model before you select it.
* Auto mode picks a model for each request.
* The model picker in the app always has the current list.

***

## Viewing Your Usage

Taskade shows your credit use in these places:

* **Usage page:** Your account settings show the credits that you used this month.
* **Workspace activity log:** The log records each credit pack purchase.
* **Usage for each agent:** The analytics show which agents use the most credits.
* **Automation run reports:** Each report shows the credits that one run used.

To see what used your credits:

1. Open [Settings → Credits](https://www.taskade.com/settings/usage).
2. Expand **Usage this month**.
3. Read the **Where your credits went** list. It shows the credits of the last 30 days by source: **Taskade EVE builds and edits**, **Agents**, **Automations**, and **Other (files, voice, images)**. Only the person who pays for a paid plan sees it.
4. To see each day and each model, click **See where credits went**.

<figure><img src="../.gitbook/assets/app-analytics-landing.gif" alt="" width="563"><figcaption></figcaption></figure>

***

## What Happens When You Run Out

Taskade always tells you when an AI request stops because of low credits.

* **Paid users:** Taskade opens the upgrade screen or the credit pack screen.
* **Free users:** Taskade asks you to upgrade.
* **Clear message:** The out-of-credits error shows in the app. A request does not stop without a message.

{% hint style="info" %}
Visitors of a public agent never see billing errors. If the agent of your app runs out of credits, visitors see a neutral error message with no billing details.
{% endhint %}

{% hint style="info" %}
If you build with the API, read the [REST API guide](../apis-living-system-development/comprehensive-api-guide/README.md). It gives the rate limits and the error codes for a request that fails.
{% endhint %}

***

## FAQ

<details>

<summary>Do credits expire?</summary>

On paid plans, purchased credit packs do not expire. Monthly Credits reset each billing cycle. A Free workspace has no monthly allowance. The pricing page shows the current policy.

</details>

<details>

<summary>Can I refund unused credits?</summary>

Refund policies are different for each case. Contact support for a review of your case.

</details>

<details>

<summary>Does Auto Top-Up have a spending cap?</summary>

Yes. Auto Top-Up buys a maximum of 5 times in 24 hours. If you set a monthly spend limit, Auto Top-Up stops for the rest of the month at that limit. Watch your usage page in the first month, and then adjust the settings.

</details>

<details>

<summary>Which models use the fewest credits?</summary>

Lightweight models have the lowest cost for each request. The model picker shows the current price of each model.

</details>

<details>

<summary>Does a Taskade Genesis app clone cost me credits?</summary>

A clone of a Taskade Genesis app uses no credits. AI use inside the cloned app uses credits as usual.

</details>

***

## Related

{% content-ref url="./" %}
[.](./)
{% endcontent-ref %}

{% content-ref url="../genesis-living-system-builder/ai-features/" %}
[ai-features](../genesis-living-system-builder/ai-features/)
{% endcontent-ref %}

---

_Step-by-step guides on taskade.com/learn: [Taskade AI Usage](https://www.taskade.com/learn/agents/ai-usage), [Auto Top-Up: Stay Building With Automatic Credit Refills](https://www.taskade.com/learn/account/auto-topup), [Billing and Pricing FAQ](https://www.taskade.com/learn/account/billing-faq)._
