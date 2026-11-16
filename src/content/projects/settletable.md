---
title: SettleTable
tagline: Self-hosted dining expense and settlement app
date: Oct 2026
order: 2
stack: [Python, SQLite, RapidOCR (ONNX Runtime), JavaScript, Docker, Cloudflare Tunnel]
repo: https://github.com/KAIYI7/settle-table
summary: Splits a restaurant bill to the exact cent across shared items, taxes, service charges and discounts, with receipt OCR and shared editing.
---

SettleTable is a self-hosted app for splitting a restaurant bill among a group. The hard part is getting everyone's share to add up to the receipt total exactly, once shared dishes, tax, service charge and discounts are involved.

## What I built

- **Exact-cent allocation.** Amounts are held in integer MYR sen and shares as rational numbers. Largest-remainder apportionment distributes the leftover sen, so shared items, taxes, service charges and discounts reconcile to the receipt total.
- **Collaboration on SQLite.** Several people can edit the same bill. Transactional revision checks guard against conflicting updates, and access is by invitation.
- **Receipt OCR with human review.** Receipts are read with RapidOCR, and a person reviews the result before it is used.
- **Real-world pilot.** I verified cross-device updates during a real group meal.
