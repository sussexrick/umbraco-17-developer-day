using Umbraco.Cms.Core.Services.Navigation;
using Umbraco.Cms.Infrastructure.HybridCache;

namespace Demo.Web.HybridCache
{
    public class TestSeedKeyProvider(IDocumentNavigationQueryService _navQuery) : IDocumentSeedKeyProvider
    {
        public ISet<Guid> GetSeedKeys()
        {
            _navQuery.TryGetDescendantsKeys(new("8b97891b-bb88-4c50-827d-a458c3c2b7bb"), out var keys);

            return new HashSet<Guid>(keys);
        }
    }
}
