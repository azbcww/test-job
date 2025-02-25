"use client";

type AchievementCardProps = {
  icon: string;
  achievement: string;
  category: string;
};

export const AchievementCard = (props: AchievementCardProps) => {
  const { icon, achievement, category } = props;

  return (
    <div className="card shadow-sm p-3 bg-white rounded text-center">
      <div className="card-body">
        <span className="material-symbols-outlined">{icon}</span>
        <h5 className="card-title mb-2">{achievement}</h5>
        <p className="card-text text-muted mb-0">{category}</p>
      </div>
    </div>
  );
};
