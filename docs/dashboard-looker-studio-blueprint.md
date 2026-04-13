# Blueprint Dashboard SolvTech (Looker Studio)

## Tujuan Dashboard

Dashboard ini dipakai untuk evaluasi mingguan performa landing page dengan fokus:

- kualitas traffic dan engagement
- efektivitas CTA WhatsApp
- kontribusi source CTA desktop vs mobile
- pemenang eksperimen hero variant A/B

## Data Source

- Google Analytics 4 property SolvTech
- Date range default: Last 7 days
- Comparison: Previous period (7 days)

## Filter Utama

Tambahkan filter control di bagian atas dashboard:

- Date range
- Device category (desktop, mobile, tablet)
- Session source/medium (opsional)

## Struktur Halaman

### 1) Executive Overview

Tujuan: ringkasan cepat kondisi performa.

Komponen:

- Scorecard: Sessions
- Scorecard: Users
- Scorecard: CTA CTR total
- Scorecard: Lead Submit Rate
- Scorecard: Scroll 75% Rate
- Scorecard: Scroll 100% Rate
- Table mini: Top CTA source by clicks

Rumus field turunan yang disarankan:

- CTA CTR total = SUM(cta_click events) / SUM(sessions)
- Lead Submit Rate = SUM(lead_submit events) / SUM(sessions)
- Scroll 75% Rate = SUM(scroll_depth where depth_75) / SUM(sessions)
- Scroll 100% Rate = SUM(scroll_depth where depth_100) / SUM(sessions)

### 2) Conversion Performance

Tujuan: mengetahui CTA mana yang menghasilkan niat terbaik.

Komponen:

- Bar chart: cta_click by source
  - breakdown source: nav_desktop, nav_mobile, hero_primary, hero_secondary, contact_primary, contact_secondary
- Bar chart: cta_click by cta_type
  - audit vs consultation
- Time series: daily cta_click
- Table detail:
  - Dimension: event_label
  - Metrics: Event count, % of total cta_click

Insight yang dicari:

- apakah mobile nav ikut mendorong klik CTA
- source CTA terbaik per device

### 3) Navigation & Engagement

Tujuan: membaca jalur interaksi pengguna sebelum klik CTA.

Komponen:

- Funnel (atau bar bertingkat):
  - section_view hero -> story -> services -> process -> proof -> contact
- Bar chart: section_nav_click by source (nav_desktop/nav_mobile/logo)
- Bar chart: section_nav_click by section
- Time series: scroll_depth milestones (25, 50, 75, 100)

KPI penting:

- Navigation Engagement Rate = section_nav_click / sessions
- Section Reach Rate per section

### 4) Experiment A/B

Tujuan: menentukan varian hero yang dipertahankan.

Komponen:

- Scorecard per variant A/B:
  - experiment_view
  - cta_click
  - cta_click / experiment_view
  - depth_75 / experiment_view
- Bar chart compare A vs B untuk conversion rate
- Table confidence check:
  - variant
  - impressions
  - conversions
  - conversion rate

Rule keputusan:

- jadikan pemenang jika uplift >= 10% dan volume memadai selama 2 minggu konsisten

### 5) Device Split

Tujuan: validasi performa mobile vs desktop.

Komponen:

- Scorecard pair: CTA CTR desktop vs mobile
- Scorecard pair: Navigation Engagement Rate desktop vs mobile
- Table source x device:
  - Dimension: source, device category
  - Metrics: cta_click, section_nav_click, conversion rate

## Event Dictionary yang Dipakai

- experiment_view
- section_view
- scroll_depth
- section_nav_click
- cta_click
- lead_submit

Parameter penting:

- event_category
- event_label
- source
- section
- cta_type
- variant
- depth_percent

## Layout Visual Rekomendasi

- Grid 12 kolom
- Header filter sticky tipis
- Executive overview: 2 baris pertama
- Conversion + Navigation: 2 kolom sejajar
- A/B + Device split: baris bawah

## Checklist Implementasi

1. Hubungkan data source GA4 ke Looker Studio.
2. Buat calculated fields untuk semua rasio utama.
3. Tambahkan filter date dan device di global scope.
4. Validasi event source nav_mobile sudah muncul di data.
5. Atur conditional formatting untuk threshold KPI.
6. Simpan template mingguan dan duplikasi untuk reporting rutin.

## Threshold Awal

- CTA CTR total >= 2.5%
- Depth 50 >= 55%
- Depth 75 >= 35%
- Depth 100 >= 18%

## Format Review Mingguan

- Apa yang naik/turun paling signifikan minggu ini
- Source CTA dengan performa tertinggi
- Source CTA dengan drop terbesar
- Variant hero pemenang sementara
- 3 aksi eksperimen minggu depan
