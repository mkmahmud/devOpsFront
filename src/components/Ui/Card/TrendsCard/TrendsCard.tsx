 
import Font from '../../../icons/Font';

const TrendsCard = () => {
    return (
        <div className="flex justify-between my-2">
        <div>
          <p className="text-sm">Trends In Bangladesh</p>
          <h2 className="font-bold text-lg">#Dhaka</h2>
          <p className="text-sm">300,20 posts</p>
        </div>
        <div>
          <button>
            <Font iconName="fa-ellipsis" />
          </button>
        </div>
      </div>
    );
};

export default TrendsCard;