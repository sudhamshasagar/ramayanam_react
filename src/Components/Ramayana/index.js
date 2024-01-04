import React, { useState } from "react";
import "./index.css";
import ReactAudioPlayer from "react-audio-player";
import ArrowHandler from "./arrowHandler";
import { shlokas } from "./shloka";

export default function Ramayana() {
  const [shlokaID, SetShlokaId] = useState(0);
  console.log(shlokas[shlokaID]['audio'])
  return (
    <div>
      <div
        id="edit-field-kanda-tid-wrapper"
        class="views-exposed-widget views-widget-filter-field_kanda_tid"
      >
        <label for="edit-field-kanda-tid">Kanda </label>
        <div class="views-widget">
          <div class="form-item form-type-select form-item-field-kanda-tid">
            <select
              id="edit-field-kanda-tid"
              name="field_kanda_tid"
              class="form-select required"
            >
              <option value="1" selected="selected">
                BALAKANDA
              </option>
              <option value="2">AYODHYAKANDA</option>
              <option value="3">ARANYAKANDA</option>
              <option value="4">KISHKINDAKANDA</option>
              <option value="5">SUNDARAKANDA</option>
              <option value="6">YUDDHAKANDA</option>
            </select>
          </div>
        </div>
      </div>
      <div className="section">
        <div class="section" id="section1">
          <div>
            {shlokas[shlokaID]["kannada"].split(".")[0]}
            <br />
            {shlokas[shlokaID]["kannada"].split(".")[1]}
          </div>
        </div>

        <div class="section" id="section2">
          <ReactAudioPlayer
            src={process.env.PUBLIC_URL + shlokas[shlokaID]['audio']} // Replace with your actual audio file URL
            controls
            volume={1.0}
          />
        </div>
        <div class="section" id="section3">
          <div>
            {shlokas[shlokaID]["english"].split(".")[0]}
            <br />
            {shlokas[shlokaID]["english"].split(".")[1]}
          </div>
        </div>
      </div>
      <ArrowHandler shlokaId = {shlokaID} SetShlokaId={SetShlokaId} />
    </div>
  );
}
