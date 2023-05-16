import { useQuery } from '@tanstack/react-query';
import { fetchTopicsByChannelId, fetchUserByEmail } from './api';

const DependendQueries = ({ email }) => {
  /*
  ? This is used for depending array we get data from one query and then other one is enabled based on data we need to have from first fetch
  */

  const { data: user } = useQuery({
    queryKey: ['userMail', email],
    queryFn: fetchUserByEmail,
  });

  const channelId = user?.channelId;

  const { data: channel, isLoading: loadChannel } = useQuery({
    queryKey: ['channelId', channelId],
    queryFn: fetchTopicsByChannelId,
    enabled: !!channelId,
  });

  return (
    <div>
      <article>
        <p className="p-4 bg-yellow-400 rounded-md flex items-center justify-between gap-3">
          User with account {user?.id} likes most
          {loadChannel ? (
            <span className="bg-gray-400 p-4 rounded-sm text-white text-center">
              Loading...
            </span>
          ) : (
            <section className="bg-green-400  p-2 inline-block rounded-lg ">
              <p>
                <span className="capitalize font-bold italic  mr-2">
                  Channel {channel?.id}
                </span>
                and this channel is talking essentially on topics of
                {channel?.topics.map((topic, i) => (
                  <span key={i}>{' ' + topic}</span>
                ))}
              </p>
            </section>
          )}
        </p>
      </article>
    </div>
  );
};

export default DependendQueries;
