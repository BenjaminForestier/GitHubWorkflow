import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Training/Training.scss";

export default function Training() {
  const [exercice, setExercice] = useState("");
  const [series, setSeries] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [duree, setDuree] = useState("");
  const [jours, setJours] = useState([]);
  const [objectif, setObjectif] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !exercice ||
      !series ||
      !repetitions ||
      !duree ||
      jours.length === 0 ||
      !objectif
    ) {
      setErrorMessage("Veuillez remplir tous les champs.");
    } else {
      setErrorMessage("");
      console.log("Formulaire soumis", {
        exercice,
        series,
        repetitions,
        duree,
        jours,
        objectif,
      });

      setExercice("");
      setSeries("");
      setRepetitions("");
      setDuree("");
      setJours([]);
      setObjectif("");
    }
  };

  const handleJoursChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setJours(selectedOptions);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Planificateur d'Entraînement Sportif</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="exercice" className="form-label">
              Nom de l'exercice :
            </label>
            <input
              type="text"
              id="exercice"
              name="exercice"
              className="form-control"
              placeholder="Ex : Squat, Pompes..."
              value={exercice}
              onChange={(e) => setExercice(e.target.value)}
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="series" className="form-label">
              Nombre de séries :
            </label>
            <input
              type="number"
              id="series"
              name="series"
              className="form-control"
              min="1"
              max="10"
              placeholder="Ex : 3"
              value={series}
              onChange={(e) => setSeries(e.target.value)}
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="repetitions" className="form-label">
              Nombre de répétitions :
            </label>
            <input
              type="number"
              id="repetitions"
              name="repetitions"
              className="form-control"
              min="1"
              max="100"
              placeholder="Ex : 12"
              value={repetitions}
              onChange={(e) => setRepetitions(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="duree" className="form-label">
              Durée de l'exercice (minutes) :
            </label>
            <input
              type="number"
              id="duree"
              name="duree"
              className="form-control"
              min="1"
              max="120"
              placeholder="Ex : 30"
              value={duree}
              onChange={(e) => setDuree(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="jours" className="form-label">
              Jours d'entraînement :
            </label>
            <select
              id="jours"
              name="jours"
              className="form-select"
              multiple
              value={jours}
              onChange={handleJoursChange}
              required
            >
              <option value="lundi">Lundi</option>
              <option value="mardi">Mardi</option>
              <option value="mercredi">Mercredi</option>
              <option value="jeudi">Jeudi</option>
              <option value="vendredi">Vendredi</option>
              <option value="samedi">Samedi</option>
              <option value="dimanche">Dimanche</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="objectif" className="form-label">
            Objectif de l'entraînement :
          </label>
          <textarea
            id="objectif"
            name="objectif"
            rows="4"
            className="form-control"
            placeholder="Ex : Augmenter la force, améliorer l'endurance..."
            value={objectif}
            onChange={(e) => setObjectif(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Planifier l'entraînement
          </button>
        </div>
      </form>
    </div>
  );
}
