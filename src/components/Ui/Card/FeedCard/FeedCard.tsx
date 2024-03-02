import Font from "../../../icons/Font";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FeedCard = ({ data }: any) => {
   return (
    <div className="border border-primary p-2 my-2">
      <div className="flex justify-between space-x-2">
        <div className="w-[100px]">
          <h2 className="h-14 w-14 flex items-center justify-center rounded-full border border-4 border-primary">
            <span>User</span>
          </h2>
        </div>
        <div>
          <div className="flex space-x-2">
            <h2 className="font-bold">{data?.title}</h2>
            <p>{data?.price}h</p>
          </div>
          <h2>{data?.body}</h2>
          <div className="my-2 flex space-x-4">
            <button>
              <Font iconName="fa-heart" /> <span>10</span>
            </button>
            <button>
              <Font iconName="fa-share" /> <span>197</span>
            </button>
            <button>
              <Font iconName="fa-chart-simple" /> <span>323</span>
            </button>
            <button>
              <Font iconName="fa-floppy-disk" /> <span>23</span>
            </button>
          </div>
        </div>
        <div>
          <button>
            <Font iconName="fa-ellipsis" />
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default FeedCard;
