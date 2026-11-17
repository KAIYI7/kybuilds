---
title: SettleTable
tagline: Self-hosted dining expense and settlement app
date: Oct 2026
order: 2
stack: [Python, SQLite, RapidOCR (ONNX Runtime), JavaScript, Docker, Cloudflare Tunnel]
repo: https://github.com/KAIYI7/settle-table
summary: Splits a restaurant bill to the exact cent across shared items, taxes, service charges and discounts, with receipt OCR and shared editing.
cover: /projects/settletable/portion-allocation.jpg
coverAlt: SettleTable item allocation screen where each dish on the bill is assigned to diners by portion.
coverLabel: Item allocation
coverCaption: Each item on the receipt is assigned to diners by portion until it is fully allocated.
gallery:
  - src: /projects/settletable/payer-reconciliation.jpg
    alt: Table of what each diner consumed and paid to the restaurant, with net balances summing to RM 0.00.
    label: Payer reconciliation
    caption: What each diner consumed against what they paid the restaurant. Net balances sum to RM 0.00.
  - src: /projects/settletable/peer-settlement.jpg
    alt: Outstanding balances table and a form to record a reimbursement between two diners.
    label: Peer settlement
    caption: A suggested repayment, the balances still outstanding, and the form for recording a reimbursement between diners.
---

SettleTable is a self-hosted app for splitting a restaurant bill among a group. The hard part is getting everyone's share to add up to the receipt total exactly, once shared dishes, tax, service charge and discounts are involved.

## What I built

- **Exact-cent allocation.** Amounts are held in integer MYR sen and shares as rational numbers. Largest-remainder apportionment distributes the leftover sen, so shared items, taxes, service charges and discounts reconcile to the receipt total.
- **Collaboration on SQLite.** Several people can edit the same bill. Transactional revision checks guard against conflicting updates, and access is by invitation.
- **Receipt OCR with human review.** Receipts are read with RapidOCR, and a person reviews the result before it is used.
- **Real-world pilot.** I verified cross-device updates during a real group meal.
