function JobCard({ job }) {

  return (

    <div className="
      bg-white
      p-6
      rounded-2xl
      shadow-sm
      border
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-2
      ">

        {job.title}

      </h2>

      <p className="
        text-slate-600
        mb-4
      ">

        {job.company?.name}

      </p>

      <p className="
        text-slate-500
        text-sm
      ">

        {job.location}

      </p>

    </div>

  );
}

export default JobCard;