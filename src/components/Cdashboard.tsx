const Cdashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Comparison
                  </th>
                  <th scope="col" className="px-6 py-4">
                    User A
                  </th>
                  <th scope="col" className="px-6 py-4">
                    User B
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Company Name
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    No of Users
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    No of Products
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>

                <tr className="border-b border-warning-200 bg-warning-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Percentage
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr className="border-b border-info-200 bg-info-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Upload
                  </td>
                  <td className="whitespace-nowrap px-6 py-4"><input type="file" /></td>
                  <td className="whitespace-nowrap px-6 py-4"><input type="file" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cdashboard;
