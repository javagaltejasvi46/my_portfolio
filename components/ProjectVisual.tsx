import { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual ${project.image ? "has-image" : ""} ${project.visual}`}
      aria-label={`${project.title} system visual`}
      role="img"
    >
      <div className="visual-top">
        <span>{project.eyebrow}</span>
        <i></i>
        <span>{project.status}</span>
      </div>

      {project.image ? (
        <div className="visual-img-container">
          <img
            src={project.image}
            alt={`${project.title} Interface & Architecture`}
            className="visual-real-img"
            loading="lazy"
          />
          <div className="visual-img-overlay"></div>
          <div className="visual-img-badge">
            <span>{project.title}</span>
            <em>SYSTEM ARTIFACT &middot; {project.status}</em>
          </div>
        </div>
      ) : (
        <>
          {project.visual === "map" && (
            <>
              <div className="map-lines"></div>
              <div className="risk-label low">LOW / 0.18</div>
              <div className="risk-label high">RISK / 0.82</div>
              <div className="map-pulse"></div>
              <div className="map-card">
                <span>MONITORING AREA</span>
                <b>WESTERN GHATS</b>
                <em>LIVE SIGNALS &middot; 08</em>
              </div>
            </>
          )}
          {project.visual === "audio" && (
            <>
              <div className="wave">
                {Array.from({ length: 42 }, (_, i) => (
                  <i key={i} style={{ height: `${16 + ((i * 17) % 68)}%` }} />
                ))}
              </div>
              <div className="transcript">
                <span>01:24</span>
                <p>
                  <b>SPEAKER 01</b> Pattern observed. Let&apos;s review the next detail.
                </p>
                <p>
                  <b>SPEAKER 02</b> Session captured and ready to summarize.
                </p>
              </div>
            </>
          )}
          {project.visual === "stems" && (
            <div className="stem-list">
              {["VOCALS", "DRUMS", "BASS", "OTHER"].map((stem, i) => (
                <div key={stem}>
                  <span>{stem}</span>
                  <div className="stem-wave">
                    {Array.from({ length: 16 }, (_, x) => (
                      <i key={x} style={{ height: `${20 + ((x * (i + 2) * 13) % 72)}%` }} />
                    ))}
                  </div>
                  <b>{i === 0 ? "READY" : "SEPARATED"}</b>
                </div>
              ))}
            </div>
          )}
          {project.visual === "route" && (
            <>
              <svg className="route-map" viewBox="0 0 500 300" aria-hidden="true">
                <path d="M28 218 C 120 65, 190 240, 275 124 S 402 39, 468 99" />
                <path className="route-active" d="M28 218 C 120 65, 190 240, 275 124 S 402 39, 468 99" />
                {[[28, 218], [159, 118], [275, 124], [386, 72], [468, 99]].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r={i === 0 || i === 4 ? 8 : 5} />
                ))}
              </svg>
              <div className="route-readout">
                <span>ROUTE CONFIDENCE</span>
                <b>EXPLAINABLE</b>
                <em>GRAPH SIGNALS ONLINE</em>
              </div>
            </>
          )}
          {project.visual === "vision" && (
            <>
              <div className="vision-grid">
                {Array.from({ length: 25 }, (_, i) => (
                  <i key={i} className={i === 6 || i === 12 || i === 18 ? "active" : ""} />
                ))}
              </div>
              <div className="vision-box">
                <span>NETRA.ai</span>
                <b>EDGE AI &middot; &lt;3s LATENCY</b>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
